# Task Manager Web Application

A simple, full-stack Task Manager application built with React (TypeScript) and Node.js (Express) using SQLite. This app allows a single user to **Create, Read, Update, and Delete (CRUD)** tasks with ease. It works seamlessly across both **mobile** and **desktop** browsers.

## Features

- 📋 View a list of tasks
- ➕ Create tasks with **title, description, and due date**
- ✏️ Edit existing tasks
- ❌ Delete tasks
- 📱 Fully responsive for mobile and desktop
- 🧪 Includes at least one unit test

---

## Tech Stack

### ⚙️ Backend
- Node.js with Express
- SQLite (local file-based database)

---

## Live Demo

🔗 [Live API on Render](https://taskmanagerserver-63ij.onrender.com)

🔗 [Frontend GitHub Repository](https://github.com/sougatadafader/task-manager-client)

🔗 [Backend GitHub Repository](https://github.com/sougatadafader/TaskManagerServer)

---

## Getting Started

### 🔧 Prerequisites
- Node.js & npm installed
- Git installed

### 🚀 Running Locally

#### 1. Clone the repositories
```bash
git clone https://github.com/sougatadafader/TaskManagerServer.git
cd TaskManagerServer
```

#### 2. Install dependencies & start backend
```bash
npm install
npm start
```

Backend will run on `http://localhost:5000`

## Folder Structure Overview

```
TaskManagerServer/
├── src/
│   └── server/
│       └── server.js
│   └── database/
│       └── db.js
├── tasks.db
├── package.json

---

## 📌 Notes
- Uses SQLite for persistence with a local `.db` file.
- Client and server can be deployed independently.

---

## Author

**Sougata Dafader**
- GitHub: [@sougatadafader](https://github.com/sougatadafader)