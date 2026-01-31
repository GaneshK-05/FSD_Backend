# FSD Backend API 

This project is a Full Stack Development (FSD) Backend API built using Node.js, Express.js, and MongoDB.  
It follows a clean MVC architecture and is deployed on Render.

---

## Project Structure

```text
FSD_Backend
├── Controllers
│   ├── authController.js
│   ├── adminController.js
│   └── submissionController.js
│
├── Database
│   └── connection.js
│
├── Middleware
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── Models
│   ├── userModel.js
│   ├── submissionModel.js
│   └── deadlineModel.js
│
├── Routers
│   ├── authRouter.js
│   ├── adminRouter.js
│   └── submissionRouter.js
│
├── server.js
├── render.yaml
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```
---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Postman
- Render (Cloud Deployment)
---

## Render Deployed Code

https://controlled-deadline-backend.onrender.com/

---

## Environment Variables

Create a `.env` file in the root directory and add the following:

MONGO_URI="mongodb+srv://kkganesh2005:kkganesh@cluster0.jadwce9.mongodb.net/CSDS-db?retryWrites=true&w=majority"  
JWT_SECRET=deadline_secret_key  
PORT=10000  

Note:  
Do NOT upload the `.env` file to GitHub.  
Add these variables in the Render dashboard for deployment.

---

## How to Run Locally

1. Clone the repository:
git clone https://github.com/GaneshK-05/FSD_Backend.git

2. Navigate to the project folder:
cd FSD_Backend

3. Install dependencies:
npm install

4. Start the server:
node server.js

The server will run on:
http://localhost:10000

---

## API Testing Using Postman

### Headers:
Authorization: Bearer <JWT_TOKEN>  
Content-Type: application/json

---

## Deployment on Render

- Platform: Render
- Build Command:
npm install

- Start Command:
node server.js

Render automatically assigns the PORT using `process.env.PORT`.

---

## Features

- RESTful API architecture
- JWT-based authentication
- Secure middleware handling
- MongoDB Atlas cloud database
- Production-ready backend deployment

---

## License

This project is created for educational purposes as part of Full Stack Development learning.

---

## Author

Ganesh K  
GitHub: https://github.com/GaneshK-05
