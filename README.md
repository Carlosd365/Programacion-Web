# HW-08

## Results Test

### Frontend

#### Dashboard 
![Frontend Dashboard](./docs/front1.jpeg)

#### Vulnerabilities
![Frontend Security](./docs/front2.jpeg)
![Frontend Security](./docs/front3.jpeg)
![Frontend Security](./docs/front4.jpeg)


### Backend

#### Dashboard 
![Backend Dashboard](./docs/back1.jpeg)

#### Vulnerabilities
![Backend Security](./docs/back2.jpeg)
![Backend Security](./docs/back3.jpeg)
![Backend Security](./docs/back4.jpeg)
![Backend Security](./docs/back5.jpeg)
![Backend Security](./docs/back6.jpeg)

# Start SonarQube and PostgreSQL
docker compose up -d

# Run backend (Python) analysis
pysonar --sonar-host-url=http://localhost:9000 --sonar-token=<backend-token> --sonar-project-key=backend

# Run frontend (Next.js) analysis
sonar -Dsonar.host.url=http://localhost:9000 -Dsonar.token=<frontend-token> -Dsonar.projectKey=frontend
