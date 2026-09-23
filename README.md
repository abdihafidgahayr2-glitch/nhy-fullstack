# NHY Safety, Environmental & Facilities Services — Website

A full-stack business website for NHY, built with the MERN stack (MongoDB, Express, React, Node.js). Live at **[nhyservices.ie](https://nhyservices.ie/)**.

## 📋 Project Overview

A marketing and lead-generation site for a safety, environmental and facilities services company. Visitors can learn about the company's services and submit enquiries through a contact form, which are validated and stored in a database.

## ✨ Features

- **Service showcase** — displays service categories and details, fetched from the API with a local fallback if the database is unreachable
- **Contact form** — enquiries are validated server-side and stored in MongoDB
- **Responsive, section-based layout** — Navbar, Hero, Services, Community & Textiles, Planet Strip, Coming Soon, Why Us, Contact Form, Footer, Back-to-top button
- **REST API** — clean separation between the React frontend and Express backend
- **Custom SCSS styling** — compiled to CSS via Sass

## 🏗️ Tech Stack

**Frontend:**
- React 19 with React Router
- Axios for API calls
- SCSS (compiled with Sass)

**Backend:**
- Node.js / Express
- MongoDB with Mongoose
- express-validator for input validation
- CORS enabled API
- Centralized error handling middleware

## 📁 Project Structure

```
nhy-fullstack/
├── client/                    # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── css/main.css       # compiled from src/scss/main.scss
│   └── src/
│       ├── components/        # Navbar, Hero, Services, CommunityAndTextiles,
│       │                      # PlanetStrip, ComingSoon, WhyUs, ContactForm,
│       │                      # Footer, BackToTop, HashLink
│       ├── config/             # global_constants.js (SERVER_HOST)
│       ├── scss/               # main.scss
│       ├── App.js, index.js
│
└── server/                    # Node/Express backend
    ├── config/                # db.js, .env.example
    ├── middleware/             # errorHandler.js
    ├── models/                 # ContactMessage.js
    ├── routes/                 # contact.js, services.js
    └── server.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/abdihafidgahayr2-glitch/nhy-fullstack.git
cd nhy-fullstack
```

### 2. Set up the backend
```bash
cd server
npm install
cp config/.env.example config/.env
```

Edit `config/.env` and set your `MONGO_URI` if it differs from the default:
```
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/nhy
```

Start the server:
```bash
npm run dev
```

### 3. Set up the frontend
```bash
cd ../client
npm install
npm run sass
npm start
```

`npm start` opens `http://localhost:3000`. The client talks to the API at the address configured in `src/config/global_constants.js` (`http://localhost:4000/api` by default).

While editing styles, run `npm run sass:watch` in a second terminal so SCSS changes recompile automatically.

## 🔌 API Overview

| Route | Description |
|---|---|
| `GET /api/health` | Health check |
| `GET /api/services` | Get service categories and details |
| `GET /api/contact` | Get stored enquiries |
| `POST /api/contact` | Submit an enquiry `{ name, email, service, message }` |

If MongoDB isn't running, the site still displays correctly since `Services.js` falls back to a local copy of the service data — but the contact form requires the database to store enquiries.

## 🔒 Security Notes

This repository does not include the `.env` file — use `config/.env.example` as a template and create your own locally.

## 📝 Known Issues

If `npm start` or `npm run build` throws an ESLint config error about `jest/globals`, it's a known mismatch between `react-scripts@5` and newer `eslint-plugin-jest` versions pulled in without a lockfile. Run with `DISABLE_ESLINT_PLUGIN=true` as a workaround.

## 🌐 Live Site

**[nhyservices.ie](https://nhyservices.ie/)**

## 👤 Author

**Abdihafid Gahayr** — [LinkedIn](https://www.linkedin.com/in/abdihafid-gahayr-166134405/)
