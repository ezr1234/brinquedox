const User = require('../models/UserModel'),
authConfig = require('../../config/auth'),
jwt = require('jsonwebtoken'),
bcrypt = require('bcryptjs');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

class auth{
  static async login(req,res){
    const { email,senha } = req.body;
    const user = await User.findOne({ email }).select('+senha');

    if (!user)
      return res.status(400).send({ error: 'User not found' });

    if (!await bcrypt.compare(senha, user.senha))
      return res.status(400).send({ error: 'Invalid password' });

    user.senha = undefined;

    res.send({
      user,
      token: generateToken({ id: user.id }),
    });
  }

  static async register(req,res){
      const { email } = req.body;
    
      try {
        if (await User.findOne({ email }))
          return res.status(400).send({ error: 'User already exists' });

        const user = await User.create(req.body);
    
        user.senha = undefined;
        
        return res.send({
          user,
          token: generateToken({ id: user.id }),
        });
      } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
      }
  }
}

module.exports = auth;
