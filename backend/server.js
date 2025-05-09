   // backend/server.js
   const express = require('express');
   const mongoose = require('mongoose');
   const dotenv = require('dotenv');
   const cors = require('cors');
   const authRoutes = require('./route/Auth');
   const chatgptRoutes = require('./route/ChatGPT');

   dotenv.config();

   const app = express();
   const PORT = process.env.PORT || 3000;

   // Middleware
   app.use(cors()); // Enable CORS for all origins
   app.use(express.json()); // To parse JSON bodies

   // Connect to MongoDB
   mongoose.connect(process.env.MONGODB_URI)
       .then(() => {
           console.log('Connected to MongoDB');
       })
       .catch(err => {
           console.error('Error connecting to MongoDB:', err.message);
       });

   // Routes
   app.use('/api/auth', authRoutes);
   app.use('/api/chatgpt', chatgptRoutes);

   // Start the server
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });