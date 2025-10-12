import uuid
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .redis_client import redis_client


@api_view(['POST'])
def hide_secret(request):
    """Guarda un secreto y retorna una clave única"""
    secret = request.data.get('secret')
    if not secret:
        return Response({"error": "No se recibió ningún secreto."}, status=status.HTTP_400_BAD_REQUEST)
    
    key = str(uuid.uuid4())
    redis_client.set(key, secret)
    return Response({"key": key}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def reveal_secret(request):
    """Revela el secreto y elimina la clave"""
    key = request.data.get('key')
    if not key:
        return Response({"error": "No se recibió ninguna key."}, status=status.HTTP_400_BAD_REQUEST)
    
    secret = redis_client.get(key)
    if not secret:
        return Response({"error": "La key no existe o ya fue utilizada."}, status=status.HTTP_404_NOT_FOUND)
    
    redis_client.delete(key)
    return Response({"secret": secret}, status=status.HTTP_200_OK)
