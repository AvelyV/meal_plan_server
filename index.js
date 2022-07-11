const express = require('express');
const app = express();
const mongoose = require('mongoose')
const PeriodModel = require('./models/Periods')
const cors = require('cors')

// if you dont use this, any requests that involve the body will give an error
// automatically parses jason for requests
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://user123:Password123@cluster0.kur4uj1.mongodb.net/meal_plan?retryWrites=true&w=majority")

app.get("/allPeriods", (req, res) => {
  PeriodModel.find({}, (err, result) => {
    if (err){
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.listen(4000, () => {
  console.log('Server Running');
});
