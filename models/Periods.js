const mongoose = require('mongoose');

const PeriodSchema = new mongoose.Schema({
  periodName: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
    maxLength: [40, 'Name can not be more than 40 characters'],
    meals: [
      {
        // type: Array,
        mealName: {
          type: String,
          trim: true,
          required: [true, 'Name is required'],
          maxLength: [40, 'Name can not be more than 40 characters'],
        },
        date: {
          type: Date,
        },
        ingredience: [
          {
            // type: Array,
            ingredientName: {
              type: String,
            },
            have: Boolean,
          },
        ],
      },
    ],
  },
});

const PeriodModel = mongoose.model('periods', PeriodSchema);

module.exports = PeriodModel;
