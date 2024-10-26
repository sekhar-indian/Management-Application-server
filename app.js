const express=require('express');
const app=express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors=require('cors')

dotenv.config();
app.use(express.json());
app.use(cors()); 

// const adminRoutes=require('') it just for real time application ref
const userRoutes=require('./routers/user')


// app.use('/admin', adminRoutes);
app.use('/user', userRoutes);


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
//   mongoose.connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(4000)
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB:', err);
//   });
