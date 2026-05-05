# Karishma's Portfolio — MERN Stack

A full stack developer portfolio built with the MERN stack (MongoDB, Express, React, Node.js). Features a bold brutalist design, REST API backend, and smooth animations.

---

## 🚀 Live Demo
[Coming soon after deployment]

---

## 🛠 Tech Stack

**Frontend**
- React 19 + Vite 5
- Tailwind CSS v4
- Framer Motion (animations)
- Axios (API calls)
- React Hot Toast (notifications)

**Backend**
- Node.js + Express 5
- MongoDB Atlas + Mongoose
- JWT (for future auth)
- Nodemailer (contact form)

---

## ✨ Features

- Brutalist dark design with orange accents
- Fully responsive (mobile + desktop)
- Projects fetched from MongoDB via REST API
- Contact form that saves messages to database
- Smooth scroll + scroll-triggered animations
- Hamburger menu on mobile

## 📁 Project Structure

mern-portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── sections/
│   │   │       ├── Hero.jsx
│   │   │       ├── About.jsx
│   │   │       ├── Skills.jsx
│   │   │       ├── Projects.jsx
│   │   │       └── Contact.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
└── server/                 # Express backend
├── models/
│   └── Project.js
├── routes/
│   ├── projects.js
│   └── contact.js
└── index.js
---

## ⚙️ Setup & Run Locally

### Prerequisites
- Node.js v20+
- MongoDB Atlas account
- Git

### 1. Clone the repo
```bash
git clone https://github.com/karishma/mern-portfolio.git
cd mern-portfolio
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create a `.env` file in `server/`:
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
Start the server:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../client
npm install
npm run dev
```

### 4. Open in browser
Frontend: http://localhost:5173
Backend:  http://localhost:5000

---

## 🌐 Deployment

| Service | Platform |
|--------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## 📬 Contact

**Karishma**
- Email: 23cseb13karishma@gmail.com
- GitHub: github.com/KarishmaShakul
- Location: Madurai, India

---

## 📖 What I Learned

Building this portfolio taught me:
- How the MERN stack connects end to end
- REST API design with Express + Mongoose
- React component architecture
- Tailwind CSS v4 styling
- Deploying full stack apps

---

*Built with ❤️ while learning MERN stack in public — 2026*
---

## 📁 Project Structure
