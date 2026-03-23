# Azure Resume Challenge - Static Web App + Standalone Azure Function App + Cosmos DB

This project is a cloud-hosted resume website built on Microsoft Azure using a decoupled architecture. The frontend is hosted on Azure Static Web Apps, while the backend visitor counter runs in a standalone Azure Function App with Cosmos DB for persistent storage.

## Architecture
- Azure Static Web Apps
- Standalone Azure Function App (Node.js)
- Azure Cosmos DB
- GitHub for version control

## Features

- Responsive resume website
- Visitor counter backed by serverless API
- Persistent storage in Cosmos DB
- Separated frontend and backend deployment

## How It Works
1. A visitor opens the resume website.
2. Frontend JavaScript sends a request to the deployed Function App endpoint.
3. The function reads and updates the visitor count in Cosmos DB.
4. The updated count is returned and rendered on the page.

## Tech Stack

- HTML
- CSS
- JavaScript
- Node.js
- Azure Static Web Apps
- Azure Functions
- Azure Cosmos DB

## Project Structure
.
├── .github/
├── .vscode/
├── api/
│ ├── .vscode/
│ ├── src/
│ │ └── functions/
│ ├── host.json
│ ├── package.json
│ └── package-lock.json
├── frontend/
│ ├── index.html
│ ├── main.js
│ └── styles.css
├── .gitignore
└── README.md

## Local Development
1. Clone the repository
2. Install dependencies
3. Run the frontend locally
4. Start the Azure Functions project locally

## Configuration

The following Azure application settings are required:

- COSMOS_ENDPOINT
- COSMOS_KEY
- COSMOS_DATABASE_NAME
- COSMOS_CONTAINER_NAME

Keep secrets out of source control.
## Deployment

- Frontend deployed to Azure Static Web Apps
- Backend deployed separately to Azure Function App

## Lessons Learned

- Difference between integrated and standalone Azure serverless architectures
- Configuring app settings in Azure
- Debugging deployment and runtime issues
- Managing CORS between separately deployed services

## Live Demo
[https://happy-dune-0692d3d1e.6.azurestaticapps.net/]
