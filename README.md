# 🏥 Hospital Management System

A modern, responsive **Healthcare & Patient Management Portal** with 3D card hover effects, real-time doctor/patient records, and an integrated appointment booking system.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🔗 Live Demo

**[hospital-management-i55p.onrender.com](https://hospital-management-i55p.onrender.com)**

## ✨ Features

- 👨‍⚕️ **Doctor Management** — browse, filter, and search verified specialists by department
- 🩺 **Patient Records** — track admissions, diagnoses, and patient status (Outpatient / Admitted / Discharged)
- 📅 **Appointment Booking** — book OPD consultations, generate digital tokens, and manage the live queue
- 🎨 **3D Card Hover Effects** — interactive tilt and specular glare on service cards
- 📱 **Fully Responsive** — optimized layouts for desktop, tablet, and mobile
- 💾 **Offline-First Fallback** — gracefully falls back to local storage if the backend is unreachable
- ✉️ **Direct Helpdesk Contact** — dispatches inquiries straight to the hospital's email

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, Vanilla JavaScript (ES Modules), Custom CSS |
| Backend | Node.js, Express |
| Dev Tooling | Vite |
| Build | esbuild (server bundling) |
| Deployment | Render |

## 📂 Project Structure

```
hospital-management-system/
├── src/
│   ├── app.js          # Frontend application logic
│   └── style.css        # Custom styling with 3D effects
├── index.html            # Main HTML entry point
├── server.js              # Express backend & API routes
├── app.py                  # Python component (Gemini API integration)
├── package.json
├── vite.config.js
└── .env.example            # Environment variable template
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/subhosreesha22/Hospital-Management.git
cd Hospital-Management

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```
Runs the app locally with Vite's dev server and hot module reloading.

### Production Build

```bash
npm run build
npm start
```
Builds the frontend and bundles the Express server, then starts the production server.

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health check |
| `GET` | `/api/stats` | Summary statistics |
| `GET` | `/api/doctors` | List doctors (supports `?department=` & `?search=`) |
| `POST` | `/api/doctors` | Register a new doctor |
| `GET` | `/api/patients` | List patients (supports `?status=` & `?search=`) |
| `POST` | `/api/patients` | Register a new patient |
| `GET` | `/api/appointments` | List appointments |
| `POST` | `/api/appointments` | Book a new appointment |
| `PATCH` | `/api/appointments/:id` | Update appointment status |
| `DELETE` | `/api/appointments/:id` | Cancel an appointment |
| `POST` | `/api/contact` | Submit a helpdesk inquiry |

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**City Hospital Helpdesk** — helpdesk.cityhospital67@gmail.com
