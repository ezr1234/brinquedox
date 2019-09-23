const mongoose = require('../db');

const CategoriaSchema = new mongoose.Schema({
  nome:{
    type:String,
    required:true,
  },
  criadoEm:{
    type:Date,
    default:Date.now,
  },
})

const Categoria = mongoose.model('Categoria',CategoriaSchema)

module.exports = Categoria

