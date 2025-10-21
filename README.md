🛒 Grab&Go – A Modern E-Commerce Platform
Welcome to Grab&Go — a full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring cloud image uploads, user authentication, product management, and optional Stripe-powered online payments.

🚀 Live Demo
https://grabngo-app.vercel.app/

📦 Features
>User authentication (Sign up / Login)

>Product browsing & search

>Cloudinary-powered image uploads

>Shopping cart functionality

>Optional: Secure payments via Stripe

>Responsive & modern UI

🛠️ Tech Stack
>Frontend: React, Vite, Tailwind CSS

>Backend: Node.js, Express.js

>Database: MongoDB Atlas

>File Storage: Cloudinary

>Payments: Stripe (optional)

>Deployment: Vercel

📥 Installation & Setup
Prerequisites
Node.js (v18 or higher)
MongoDB Atlas account
Cloudinary account
(Optional) Stripe account (for payment feature)


1. Clone the Repository
   
   > git clone https://github.com/your-username/GrabAndGo.git
   
   > cd GrabAndGo

3. Set Up Environment Variables
Create a .env file in the server directory and add the following:
    > a) MONGO_URI=your_mongodb_atlas_connection_string
    
    > b)CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    
    > c)CLOUDINARY_API_KEY=your_cloudinary_api_key
    
    > d) CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    
    > e) NODE_ENV=development
    
    > f) PORT=5000
    
    > g) # Optional: Stripe (if using payments)
    
    > h) STRIPE_SECRET_KEY=your_stripe_secret_key
    
    > i) STRIPE_WEBHOOK_SECRET=your_stripe_webhook_signing_secret

💡 Get your credentials from: 

    > MongoDB Atlas - https://www.mongodb.com/cloud/atlas/register
    
    > Cloudinary - https://cloudinary.com/users/register_free
    
    > Stripe Dashboard - https://dashboard.stripe.com/login
  
3. Install Dependencies & Run Locally

🖥️ Backend (Server)
  >  cd server

  >  npm install

  >  npm run server

Server will run on http://localhost:5000

💻 Frontend (Client)
Open a new terminal:
  > cd client

  > npm install

  > npm run dev
Frontend will run on http://localhost:5173 (or similar)

🤝 Support
Having trouble? Feel free to reach out!

  LinkedIn - https://www.linkedin.com/in/abhisheksaxenaas/

2025 Grab&Go
