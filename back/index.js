const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

  
const app = express(); // Define the Express app in the global scope

app.listen(3000, () => {
  console.log('Server listening on 3000');
});
