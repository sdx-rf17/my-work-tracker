# 📊 My Work Tracker

> A full-stack productivity web app to manage tasks, track work sessions, and improve time management.

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MySQL](https://img.shields.io/badge/Database-MySQL-lightgrey?logo=mysql)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

---

## 🧰 Tech Stack

- **Frontend**: React, Axios, Bootstrap/CSS
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Deployment**: Vercel (Frontend), Railway/Render (Backend)

---

## 📁 Project Structure

```
my-work-tracker/
├── backend/     # Node.js + Express + MySQL
│   └── .env.example
├── frontend/    # React.js client app
│   └── .env.example
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 🔧 Backend Setup (`/backend`)

1. Go to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and copy the structure below:
   <details>
     <summary><code>.env.example (backend)</code></summary>

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=myworktracker
   PORT=5000
   ```
   </details>

4. Run the server:
   ```bash
   npm start
   ```

---

### 💻 Frontend Setup (`/frontend`)

1. Go to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and copy the structure below:
   <details>
     <summary><code>.env.example (frontend)</code></summary>

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```
   </details>

4. Start the development server:
   ```bash
   npm start
   ```

---

## 🔗 Connecting Frontend to Backend

Make sure the API URL in your React app points to your backend:

```env
# frontend/.env
REACT_APP_API_URL=http://localhost:5000
```

Use it in your API calls:

```js
axios.get(`${process.env.REACT_APP_API_URL}/api/tasks`);
```

---

## 🛠 Environment Variables Overview

| Location     | File           | Purpose                  |
|--------------|----------------|--------------------------|
| `/backend`   | `.env`         | DB credentials, port     |
| `/frontend`  | `.env`         | API URL for backend      |

> ⚠️ **Never commit real `.env` files** – only `.env.example`.

---

## 🚢 Deployment

### 🖥 Frontend: Deploy to Vercel
- Import your GitHub repo
- Build command: `npm run build`
- Output directory: `build/`
- Add environment variable:
  ```
  REACT_APP_API_URL=https://your-backend-url
  ```

### 🗄 Backend: Deploy to Render or Railway
- Connect GitHub or deploy via CLI
- Set environment variables in dashboard
- Ensure CORS is enabled for frontend domain

### 🛢 Database Hosting
- [PlanetScale](https://planetscale.com) or [Railway](https://railway.app) (both support MySQL)

---

## 📸 Screenshots

<!-- Add screenshots here -->
<p align="center">
  <img src="screenshots/dashboard.png" width="600" alt="Dashboard Screenshot" />
</p>

---

## 🧾 .gitignore

Use the following `.gitignore` at the project root:

<details>
<summary><code>.gitignore</code></summary>

```gitignore
# Node modules
**/node_modules/

# Build output
**/build/
**/dist/

# Environment variables
**/.env
**/.env.local
**/.env.*.local

# Logs
*.log
logs
npm-debug.log*

# OS files
.DS_Store
Thumbs.db
```
</details>

---

## 📜 License

Licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**sadeex** – [@sadeex](https://github.com/sdx-rf17)

---

## 🌐 Live Demo (Optional)

- Frontend: https://yourfrontend.vercel.app
- Backend API: https://yourbackend.onrender.com

---

