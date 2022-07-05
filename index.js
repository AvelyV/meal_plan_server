const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect()

app.listen(4000, () => {
  console.log('Server Running');
});
