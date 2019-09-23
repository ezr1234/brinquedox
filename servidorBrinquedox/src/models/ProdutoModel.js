const mongoose = require('../db');

const ProdutoSchema = new mongoose.Schema({
  nome:{
    type:String,
    required:true,
  },
  peso:{
    type:String,
  },
  dimensoes:{
    type:String,
  },
  marca:{
    type:String,
  },
  imagem:{
    type:String,
  },
  valor:{
    type:mongoose.Decimal128,
    require:true,
  },
  descricao:{
    type:String,
  },
  categoria:{
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }]
  },
  criadoEm:{
    type:Date,
    default:Date.now,
  },
})

const Produto = mongoose.model('Produto',ProdutoSchema)

module.exports = Produto

