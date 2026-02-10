# ☁️ Cloud Dashboard — Dockerized DevOps Monitoring UI

A futuristic cloud-style monitoring dashboard built using **Node.js**, **Docker**, **Nginx**, and **Docker Compose** that visually demonstrates how frontend, backend, and containers communicate in a real DevOps architecture.

This project simulates how modern cloud applications are deployed, monitored, and accessed through containerized services.

---

## 🚀 What This Project Demonstrates

This is not just a web app.

It shows:

- Frontend ↔ Backend API communication
- Container identity (like Kubernetes Pods)
- Real-time backend health monitoring
- Docker container networking
- Service orchestration using Docker Compose
- Cloud-style dashboard UI
- Kubernetes-ready project structure

---

## 🧱 Architecture

```
Browser  →  Frontend (Nginx)  →  Backend (Node.js API)  →  Docker Container
```

The frontend calls the backend API and displays:

- Application Status
- Container (Pod) ID
- Server Time (live)

---

## 🛠️ Tools & Technologies Used

| Tool | Purpose in Project |
|-----|---------------------|
| **Node.js** | Backend API server |
| **Express.js** | Handling API routes |
| **Nginx** | Serves frontend UI |
| **Docker** | Containerization of services |
| **Docker Compose** | Multi-container orchestration |
| **HTML/CSS/JS** | Futuristic dashboard UI |
| **Linux (Parrot OS)** | Development environment |
| **Git & GitHub** | Version control and project hosting |

---

## 📁 Project Structure

```
cloud-dashboard/
│
├── backend/           → Node.js API
├── frontend/          → Dashboard UI (served by Nginx)
├── docker-compose.yml → Runs full system
└── k8s/               → Kubernetes configs (future deployment)
```

---

## ⚙️ What the Dashboard Shows

| Field | Meaning |
|------|---------|
| **Status** | Backend health indicator |
| **Pod / Instance ID** | Container hostname (simulates Kubernetes Pod) |
| **Time** | Live server time from backend |

This proves the UI is communicating with a live containerized service.

---

## ▶️ How to Run This Project

### 1️⃣ Clone the repository

```bash
git clone git@github.com:MrStark07/cloud-dashboard.git
cd cloud-dashboard
```

### 2️⃣ Run using Docker Compose

```bash
docker-compose up --build
```

### 3️⃣ Open in browser

```
http://localhost:8080
```

---

## 🧠 Why This Project is Important

This project helps understand:

- How microservices talk to each other
- How containers expose services
- How dashboards monitor backend systems
- How real cloud applications are structured
- How DevOps tools work together

---

## 🔮 Kubernetes Ready

A `k8s/` folder is included to deploy this same project on Kubernetes to demonstrate:

- Pods
- Services
- Deployments
- Scaling

---

## 📌 Future Improvements

- Add CPU / Memory usage charts
- Add multiple backend replicas
- Deploy to Kubernetes cluster
- Add authentication
- Add live metrics graphs

---

## 👨‍💻 Author

**Sidharth Bhangalia**  
DevOps • Cloud • Linux • Docker • Kubernetes
