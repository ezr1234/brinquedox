const User = require('../models/UserModel');

class user{
    static async get(req,res){
        return res.send(await User.find({})).end();
    }
    static async del(req,res){
        try {
            if(!await User.findOne({email:req.body.email}))
                return res.status(404).send({err:'Usuário não encontrado'}).end();
            let user = await User.deleteOne({email:req.body.email});
            return res.send({user:user}).end();
        } catch (error) {
            return res.send({err:'Erro ao apagar'}).end()
        }
    }

    static async alter(req,res){
        try {
            if(!await User.findOne({email:req.body.email}))
                return res.status(404).send({err:'Usuário não encontrado'}).end();
            let user = await User.updateOne({email:req.body.email},
                {$set:{nome:req.body.newnome}});
            return res.send({user:user}).end();
        } catch (error) {
            return res.send({err:'Erro ao atualizar'}).end()
        }
    }
}

module.exports = user;
