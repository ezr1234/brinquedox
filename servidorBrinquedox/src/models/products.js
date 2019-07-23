var mongoose = require('mongoose');


var productsSchema = new mongoose.Schema({
  nome:{
    type:String,
    required: true,
  },
  categoria:{
    type:String,
    required: true,
  }
});

module.exports = mongoose.model('produtos', productsSchema );