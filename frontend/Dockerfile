# Etapa 1: build de React
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: servir los archivos estáticos con Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
