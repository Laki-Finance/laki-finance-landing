# Define variables for the services
REACT_SERVICE = react-app
FASTAPI_SERVICE = fastapi-app
DOCKER_COMPOSE = docker-compose

# Default target - Bring up all services
.PHONY: up
up:
	$(DOCKER_COMPOSE) up --build -d

# Bring down all services and remove containers
.PHONY: down
down:
	$(DOCKER_COMPOSE) down

# Build Docker images without starting containers
.PHONY: build
build:
	$(DOCKER_COMPOSE) build

# Start React app only (useful for React development)
.PHONY: start-react
start-react:
	$(DOCKER_COMPOSE) up -d $(REACT_SERVICE)

# Start FastAPI app only (useful for FastAPI development)
.PHONY: start-fastapi
start-fastapi:
	$(DOCKER_COMPOSE) up -d $(FASTAPI_SERVICE)

# Stop React app only
.PHONY: stop-react
stop-react:
	$(DOCKER_COMPOSE) stop $(REACT_SERVICE)

# Stop FastAPI app only
.PHONY: stop-fastapi
stop-fastapi:
	$(DOCKER_COMPOSE) stop $(FASTAPI_SERVICE)

# Build the frontend (React app) and push the build to the appropriate directory
.PHONY: build-frontend
build-frontend:
	cd react-app && npm install && npm run build

# Clean up containers, volumes, and images
.PHONY: clean
clean:
	$(DOCKER_COMPOSE) down --volumes --remove-orphans

# View logs of both services
.PHONY: logs
logs:
	$(DOCKER_COMPOSE) logs -f $(REACT_SERVICE) $(FASTAPI_SERVICE)

# Restart all services
.PHONY: restart
restart:
	$(DOCKER_COMPOSE) restart

# Remove all stopped containers
.PHONY: prune
prune:
	$(DOCKER_COMPOSE) rm -f

# Push images to Docker registry (for production)
.PHONY: push
push:
	$(DOCKER_COMPOSE) push


build-local:
	$(DOCKER_COMPOSE) build --no-cache
