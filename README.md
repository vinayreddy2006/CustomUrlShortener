# 🔗 Custom URL Shortener with Authentication

This is a full-stack Node.js web application that allows users to shorten URLs and track analytics such as total clicks. It supports user authentication, role-based access, and uses MongoDB as the backend database. Built with Express.js, EJS templating, and Mongoose.

## 🚀 Features

- 🔐 User Authentication (Signup & Login)
- 🎯 URL Shortening using `shortid`
- 📈 Click Tracking with Timestamps
- 🧑‍💼 Role-based Access (NORMAL & ADMIN)
- 📂 EJS Views for rendering dynamic UI
- 🍪 JWT Authentication stored in cookies
- 👁️ Analytics per shortened URL

## 📁 Folder Structure


├── controllers/ # Handles route logic (URL, User)

├── middlewares/ # Authentication & Authorization middlewares

├── models/ # Mongoose schemas for User & URL

├── routes/ # URL, User, and Static routes

├── service/ # JWT token generation and parsing

├── views/ # EJS files for rendering UI

├── connect.js # MongoDB connection setup

├── index.js # Entry point for the server

├── package.json # Project metadata and dependencies

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Templating:** EJS
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, Cookies
- **Short ID Generator:** `shortid`
- **Dev Tool:** `nodemon`

---

## 🔧 Installation & Run Instructions

### 1. Clone the Repository
```bash

git clone https://github.com/yourusername/custom-url-shortener.git
cd custom-url-shortener

```
2. Install Dependencies
npm install

3. Set Up MongoDB
Ensure MongoDB is installed and running locally.

Default connection URL used:

mongodb://127.0.0.1:27017/short-url
You can update this in index.js → connectToMongoDB(...).

4. Start the Server

npm start
Server will run at:

http://localhost:8000
📌 Usage
1. Visit Homepage

http://localhost:8000
Enter a valid URL to shorten it.

View the generated short URL.

Logged-in users can see their list of shortened URLs.

2. Authentication
/signup - Create a new account

/login - Log in with email & password

Admins can view all URLs at:

http://localhost:8000/admin/urls

🔐 User Roles
Role	Permissions
NORMAL	View/Create own URLs
ADMIN	View all URLs

📊 URL Analytics
To get analytics for a short URL:

GET /url/analytics/:shortId

Returns:
{

  "totalClicks": 2,
  "analytics": [
    { 
    "timestamp": 1721571871711 },    
    { "timestamp": 1721571891234 }
  ]
  
}

✍️ Author

Developed by Palle Vinay Reddy.

