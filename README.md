# 🇮🇳 Interactive India Map

An **interactive and responsive India map application** that displays **state-specific data on hover**.
The project uses a **React frontend** for UI rendering and an **Express backend** to serve structured **JSON data for each Indian state**.

This application is ideal for **data visualization**, **educational tools**, and **dashboard-style interfaces**.

---

## ✨ Features

* 🗺️ Interactive India map with hover effects
* 📍 Displays state-specific details dynamically
* 📱 Fully responsive across devices
* ⚛️ React-based frontend for smooth UI interactions
* 🚀 Express backend for data handling
* 📊 JSON-based state data (easy to extend and maintain)

---

## 🏗️ Tech Stack

### Frontend

* React
* JavaScript

### Backend

* Node.js
* Express.js

### Data

* JSON (state-wise structured data)

---

## 📁 Project Structure

```
project-root/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   └── App.js
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── data/
│   └── server.js
│
└── README.md
```

---

## 📊 State Data Format (Example)

Each Indian state’s data is stored in JSON format:

```json
{
  "state": "Maharashtra",
  "capital": "Mumbai",
  "population": "124 million",
  "area": "307,713 sq km"
}
```

You can easily add or modify states by updating the JSON file.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
npm start
```

Backend will start on:

```
http://localhost:5000
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🚀 How It Works

* The **India map component** renders SVG state boundaries
* On **hover**, the selected state is detected
* A request is sent to the **Express backend**
* The backend returns **state-specific JSON data**
* The data is displayed instantly in the UI

---

## 🧠 Use Cases

* Geography learning applications
* Government or public data dashboards
* Interactive data visualization tools
* Portfolio projects

---
