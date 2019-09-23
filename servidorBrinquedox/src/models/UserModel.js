const mongoose = require('../db'),
bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  nome:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  senha:{
    type:String,
    required:true,
    select:false,
  },
  cpf:{
    type:String,
    required:true,
  },
  endereco:{
    type:String,
  },
  numero:{
    type:Number,
  },
  carrinho:{
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produto' }]
  },
  criadoEm:{
    type:Date,
    default:Date.now,
  },
})

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});

const User = mongoose.model('User',UserSchema)

module.exports = User

