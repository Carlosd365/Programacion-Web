# Use a lightweight Python image
FROM python:3.11-slim

# Set working directory inside the container
WORKDIR /app

# Create a non-root user
RUN adduser --disabled-password appuser
USER appuser

# Copy dependencies file
COPY --chown=appuser:appuser requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all project files
COPY --chown=appuser:appuser . .

# Environment variables for Python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Default command (overwritten by docker-compose)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
