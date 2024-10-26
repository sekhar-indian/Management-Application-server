const express=require('express');
const app=express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());


// const admin=require('') it just for real time application ref
const user=require('./routers/user')


app.use('/admin', adminRoutes);
app.use('/user', userRoutes);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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
