# Inventory Manager 📦

A Full Stack, Cloud-Ready Inventory Management System.
Built with **FastAPI** (Backend) and **React** (Frontend).

## ✨ Features
### Core Functionality
-   **Full CRUD**: Create, Read, Update, and Delete products.
-   **Real-time Updates**: Instant feedback on inventory changes.
-   **Robust Validation**: Data integrity ensured by Pydantic.

### Modern UI/UX 🎨
-   **Glassmorphism Design**: Sleek "Glass Card" aesthetic.
-   **Dark/Purple Theme**: Modern topography and vibrant accent colors.
-   **Responsive Layout**: Works on desktop and mobile.
-   **Interactive**: Hover effects, loading states, and dynamic forms.

### Cloud Architecture ☁️
-   **Backend**: Python 3.13 + FastAPI + SQLAlchemy.
-   **Database**:
    -   *Local*: SQLite (Zero config).
    -   *Cloud*: PostgreSQL (`psycopg2` driver included).
-   **Frontend**: React 18 + Vite (SPA Routing enabled via `vercel.json`).
-   **Environment Aware**: Automatically switches API URLs based on environment.

## � How to Run Locally

### 1. Start the Backend
```bash
# Install dependencies
uv sync

# Run Server
uv run uvicorn src.main:app
```
*API running at: http://127.0.0.1:8000*

### 2. Start the Frontend
```bash
cd ui

# Install Node modules
npm install

# Start Dev Server
npm run dev
```
*UI running at: http://localhost:5173*

## � Project Structure
```
├── src/                # FastAPI Backend
│   ├── main.py         # API Endpoints
│   ├── models.py       # Database Tables
│   └── database.py     # DB Connection (SQLite/Postgres)
├── ui/                 # React Frontend
│   ├── src/App.jsx     # Main UI Logic
│   ├── src/index.css   # Modern Styling
│   └── vercel.json     # Cloud Routing Config
├── requirements.txt    # Backend Dependencies (for Render)
└── inventory.db        # Local Database (Ignored by Git)
```
