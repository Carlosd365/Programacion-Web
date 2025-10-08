# HW 06

## Using Docker

In this project, **Docker** is used to run a **Django** application inside a container.  
The Docker image includes everything needed (Python, dependencies, and server), ensuring the app runs the same on any system.

---

## Running the Application

1. **Build the image:**  
   `docker-compose build`  
   → Creates the application image based on the `Dockerfile`.

2. **Start the containers:**  
   `docker-compose up`  
   → Launches the application at `http://localhost:8000`.

3. **Run in the background:**  
   `docker-compose up -d`

4. **Check active containers:**  
   `docker ps`