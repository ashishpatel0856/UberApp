# UberApp — Real-Time Ride Booking Platform

A full-stack, real-time ride-hailing application that connects riders with captains (drivers). Built with a robust dual-role authentication system, live ride tracking, and dynamic fare estimation — delivering a seamless, Uber-like experience from request to drop-off.

---

## 🚀 Features & Implementation Checklist

All core, functional, and advanced requirements are fully implemented:

### Core Requirements
- [x] **Real-Time Ride Booking**: Riders can create ride requests with pickup/destination; captains receive and confirm rides instantly via **Socket.IO**.
- [x] **Dual-Role System**: Separate authentication and dashboards for **Users (Riders)** and **Captains (Drivers)** with distinct permissions.
- [x] **JWT Authentication**: Secure login/register with JWT tokens, cookie-based sessions, and **token blacklisting** on logout.
- [x] **Google Maps Integration**: Full address support with geocoding, route distance/time calculation, and autocomplete suggestions.
- [x] **Live Ride Tracking**: Real-time status updates (pending → accepted → ongoing → completed) broadcasted via WebSockets.

### Ride Lifecycle & Captain Features
- [x] **Dynamic Fare Estimation**: Auto-calculated fares for **car, auto, and motorcycle** based on distance and time before booking.
- [x] **OTP Verification**: Secure 6-digit OTP required for captains to start the ride, preventing unauthorized pickups.
- [x] **Captain Confirmation**: Captains can accept/reject ride requests; riders see assigned captain details in real time.
- [x] **Ride Status Flow**: Complete state management from ride creation, captain assignment, OTP-based start, live tracking, to ride completion.
- [x] **Current Ride Context**: Active ride persistence so users can resume tracking even after refresh.

### Advanced Features Implemented
- [x] **Token Blacklisting**: JWT tokens are invalidated on logout using a blacklist collection for enhanced security.
- [x] **Robust Validation**: All inputs strictly validated using **express-validator** (email, password strength, address length, vehicle details).
- [x] **Interactive Maps**: **Leaflet.js** integration on the frontend for visualizing routes and live location context.
- [x] **Responsive UI**: Smooth, modern interface built with **GSAP animations**, **Tailwind CSS 4**, and **Remix Icons**.
- [x] **Real-Time Notifications**: Instant Socket.IO events for ride status changes, captain location, and booking updates.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React 19, Vite, Tailwind CSS 4, GSAP | Fast, responsive UI with animations |
| **Maps (Client)** | Leaflet, React-Leaflet | Interactive map rendering |
| **Backend** | Node.js, Express, MongoDB, Mongoose | REST API and data persistence |
| **Real-Time** | Socket.IO | Bi-directional live ride updates |
| **Maps (Server)** | Google Maps API | Geocoding, distance matrix, autocomplete |
| **Auth & Security** | JWT, bcrypt, cookie-parser | Secure auth, password hashing, token blacklisting |
| **Validation** | express-validator | Strict server-side input validation |

---

## 🏗️ Architecture Overview

The application follows a client-server architecture split into two main directories: `frontend` and `backend`.

### Backend Flow
1. **REST API**: Handles user/captain authentication (`/users`, `/captains`), ride operations (`/rides`), and map services (`/maps`).
2. **Socket.IO Server**: Manages real-time communication. When a ride is created or a captain confirms, the server broadcasts status updates to all connected clients in the ride room.
3. **State Management**:
   - **MongoDB + Mongoose** stores user profiles, captain vehicle details, ride history, and token blacklists.
   - **Ride State Machine** tracks status transitions: `pending` → `accepted` → `ongoing` → `completed`.
4. **Security Layer**: Every protected route validates JWT tokens (header or cookie). Sensitive actions (ride start with OTP, ride end) require strict role and ownership checks.

### Frontend Flow
1. **Context Providers**: React Context manages global auth state and current ride context across the application.
2. **Map Engine**: Leaflet renders pickup/destination markers and route visualizations using coordinates fetched from the backend.
3. **Real-Time Sync**: Socket.IO client listens for `ride-confirmed`, `ride-started`, and `ride-ended` events to update the UI instantly without refresh.
4. **UI/UX**: GSAP powers smooth page transitions and animations. Tailwind CSS 4 ensures a fully responsive, mobile-first design.

---

## 💻 Setup & Run Instructions

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Google Maps API Key (for geocoding and distance matrix)

### 1. Backend Setup
```bash
cd backend
npm install

# Create a .env file with:
# MONGODB_URI=your_mongodb_atlas_uri
# JWT_SECRET=your_jwt_secret
# GOOGLE_MAPS_API=your_google_maps_api_key

# Start the development server (runs on port 4000)
npm start
