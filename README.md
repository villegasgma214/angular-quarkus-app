# My Angular and Quarkus Application

This project is a full-stack application built with Angular for the frontend and Quarkus for the backend. 

## Project Structure

```
my-angular-quarkus-app
├── frontend          # Angular frontend application
│   ├── angular.json  # Angular workspace configuration
│   ├── package.json   # NPM configuration for frontend
│   ├── tsconfig.json  # TypeScript configuration
│   ├── tsconfig.app.json # TypeScript config for Angular app
│   ├── tsconfig.spec.json # TypeScript config for testing
│   ├── src           # Source files for Angular app
│   │   ├── index.html # Main HTML file
│   │   ├── main.ts    # Main entry point for Angular
│   │   ├── polyfills.ts # Polyfills for browser compatibility
│   │   ├── styles.css  # Global styles
│   │   ├── app        # Angular components
│   │   │   ├── app.component.ts # Root component
│   │   │   ├── app.component.html # Template for root component
│   │   │   ├── app.component.css # Styles for root component
│   │   │   └── app.module.ts # Root module
│   │   └── environments # Environment configurations
│   │       ├── environment.ts # Development settings
│   │       └── environment.prod.ts # Production settings
│   └── e2e          # End-to-end testing
│       ├── package.json # NPM config for e2e tests
│       └── src
│           └── app.e2e-spec.ts # E2E tests
├── backend           # Quarkus backend application
│   ├── pom.xml      # Maven configuration
│   ├── src          # Source files for Quarkus app
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           └── GreetingResource.java # REST endpoints
│   │   │   └── resources
│   │   │       └── application.properties # Configuration properties
│   │   └── test
│   │       └── java
│   │           └── com
│   │               └── example
│   │                   └── GreetingResourceTest.java # Tests for REST endpoints
│   └── Dockerfile    # Docker instructions for Quarkus app
├── .gitignore        # Files to ignore in version control
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm for the Angular frontend
- Java JDK and Maven for the Quarkus backend

### Running the Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the Angular application: `ng serve`

### Running the Backend

1. Navigate to the `backend` directory.
2. Build the Quarkus application: `mvn clean package`
3. Run the application: `mvn quarkus:dev`

### Running with Docker Compose

From the project root (PowerShell or command prompt):

- Build and start both services:
  - docker-compose up --build

- Run in background:
  - docker-compose up -d --build

- Stop and remove containers:
  - docker-compose down

Services and ports:
- Frontend (nginx): http://localhost:4200
- Backend (Quarkus): http://localhost:8080

Notes:
- The compose file builds images using the Dockerfiles in `frontend/` and `backend/`.
- Healthchecks use container-local curl/wget; if a backend image does not include curl, healthchecks may fail — adjust the backend Dockerfile or healthcheck command if needed.

## License

This project is licensed under the MIT License.