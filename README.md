# Inventory Manager

A Full Stack Inventory Management System built with **FastAPI** (Backend) and **React** (Frontend).

## 🚀 Tech Stack
- **Backend**: Python 3.13, FastAPI, SQLAlchemy, SQLite
- **Frontend**: React 19, Vite
- **Tools**: `uv` (Python Package Manager), Git

## ✨ Features
- **Product Management**: Create, Read, Update, and Delete (CRUD) products.
- **Real Database**: Data is persisted in `inventory.db` using SQLite.
- **Modern UI**: Fast and responsive React interface.
- **Validation**: Robust data validation using Pydantic.

## 🛠️ How to Run

### 1. Start the Backend
```bash
# From the root folder
uv run uvicorn src.main:app
```
*The API will be available at http://127.0.0.1:8000*  
*Interactive Docs: http://127.0.0.1:8000/docs*

### 2. Start the Frontend
```bash
# Open a new terminal
cd ui
npm run dev
```
*The UI will open at http://localhost:5173*

## 📂 Project Structure
- `src/`: Backend code (FastAPI)
  - `main.py`: API endpoints and Logic
  - `models.py`: Database table definitions
  - `database.py`: Database connection setup
- `ui/`: Frontend code (React)
- `inventory.db`: SQLite Database file (Created automatically)
