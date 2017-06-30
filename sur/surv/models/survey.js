const mongoose = require('mongoose');
const config = require('../config/database');

const surveySchema = mongoose.Schema({
  title: {
    type: String,
     unique: true 
  },
  Choices: {
    type: [],
    required: true
  },
  createdAt:{ 
      type: Date,
     default: Date.now
     },
    count:{
        type:Number,
        default:5
    },
  
});


const Survey = module.exports = mongoose.model('survey', surveySchema);