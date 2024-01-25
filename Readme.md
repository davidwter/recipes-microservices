# Recipe Recommender Application

## Overview

This project aims to build a recipe recommender system using a microservices architecture. It allows users to input ingredients they have on hand, and the system recommends recipes based on these ingredients.

### Tech Stack

- **Frontend**: React with Next.js
- **Backend**: Node.js with Nest.js
- **Database**: PostgreSQL
- **Containerization**: Docker
- **Orchestration**: Kubernetes

## Microservices

- **UI Service**: React-based frontend for user interaction.
- **Recipe Service**: Manages recipe data.
- **Ingredient Matching Service**: Analyzes user input and recommends recipes.

## Setup and Installation

### Prerequisites

- Node.js
- Docker
- Kubernetes (Minikube or Docker Desktop)
- PostgreSQL

### Local Development Setup

1. Clone the repository:

    ```sh
    git clone [repository-url]
    ```

2. Set up each microservice (UI, Recipe, and Ingredient Matching) by navigating into their respective directories and running:

    ```sh
    npm install
    ```

3. Initialize and start the PostgreSQL database

4. Build Docker images for each microservice by navigating into their respective directories and running:

    ```sh
    docker build -t [service-name] .
    ```

5. Start the application using Docker Compose

    ```sh
    docker-compose up
    ```

## API Documentation

Detailed API documentation will be available once the services are up and running, accessible at:

- Recipe service: [http://localhost:3000/api/recipes](http://localhost:3000/api/recipes)
- Ingredient Matching service: [http://localhost:3001/api/match](http://localhost:3001/api/match)

## Contributing

Contributions to this project are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (git checkout -b feature/AmazingFeature).
3. Commit your changes (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a Pull Request

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact

- [Project Link](repository-url)
