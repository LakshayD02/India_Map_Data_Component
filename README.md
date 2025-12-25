# India Maps Data Project

This project creates an interactive India map with state-specific details. It consists of a React frontend and an Express backend.

## Project Structure

- **frontend/**: React application using Vite, Leaflet, and TailwindCSS.
- **backend/**: Express.js server for handling data requests.
- **geojson/**: Contains map data files.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Install Dependencies

You can install all dependencies (root, frontend, and backend) by running these commands:

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install backend dependencies
cd backend
npm install
cd ..
```

### 2. Run the Application

To run both the frontend and backend concurrently from the root directory:

```bash
npm run dev
```

- **Frontend**: http://localhost:5173 (usually)
- **Backend**: http://localhost:3000 (check server console)

## Deployment on Render

This guide explains how to deploy this project on [Render.com](https://render.com).

### Strategy
Since this is a monorepo (one repository with multiple projects), we will deploy it as two separate services on Render:
1.  **Frontend**: A Static Site.
2.  **Backend**: A Web Service.

### Step 1: Push to GitHub
Ensure your project is pushed to a GitHub repository.

### Step 2: Deploy Backend (Web Service)
1.  Log in to your Render dashboard and click **New +**.
2.  Select **Web Service**.
3.  Connect your GitHub repository.
4.  Configure the service:
    -   **Name**: `india-maps-backend` (or similar)
    -   **Region**: Singapore (or nearest to you)
    -   **Branch**: `main` (or your working branch)
    -   **Root Directory**: `backend` (Important!)
    -   **Runtime**: `Node`
    -   **Build Command**: `npm install`
    -   **Start Command**: `node server.js`
5.  Click **Create Web Service**.
6.  Wait for the deployment to finish. Copy the **onrender.com URL** of your backend (e.g., `https://india-maps-backend.onrender.com`).

### Step 3: Configure Frontend to talk to Backend
You likely need to tell the frontend where the backend is.
-   If you have hardcoded `http://localhost:3000` in your frontend code, **replace it** with the environment variable or the new Render Backend URL.
-   **Best Practice**: Use an environment variable like `VITE_API_URL`.
    -   In your frontend code `axios.get('http://localhost:3000/...')` -> `axios.get(import.meta.env.VITE_API_URL + '/...')`.
-   If you make this change, commit and push it to GitHub.

### Step 4: Deploy Frontend (Static Site)
1.  Go to Render dashboard and click **New +**.
2.  Select **Static Site**.
3.  Connect the same GitHub repository.
4.  Configure the site:
    -   **Name**: `india-maps-frontend`
    -   **Root Directory**: `frontend` (Important!)
    -   **Build Command**: `npm run build`
    -   **Publish Directory**: `dist`
    -   **Environment Variables** (Advanced):
        -   Key: `VITE_API_URL`
        -   Value: `https://your-backend-service.onrender.com` (The URL from Step 2)
5.  Click **Create Static Site**.

### Step 5: Finalize
Once both are deployed, open your Frontend URL. It should load and fetch data from your Backend URL.

## Troubleshooting
-   **CORS Issues**: If the frontend cannot call the backend, ensure your Backend `server.js` uses `cors` and allows the frontend domain.
    ```javascript
    const cors = require('cors');
    app.use(cors({
        origin: 'https://your-frontend-site.onrender.com' // or '*' for public
    }));
    ```
