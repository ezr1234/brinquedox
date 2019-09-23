const mongoose = require('../db');

const FornecedorSchema = new mongoose.Schema({
  nome:{
    type:String,
    required:true,
  },
  cnpj:{
      type:String,
      required:true,
  },
  uf:{
    type:String,
  },
  criadoEm:{
    type:Date,
    default:Date.now,
  },
})

const Fornecedor = mongoose.model('Fornecedor',FornecedorSchema)

module.exports = Fornecedor

