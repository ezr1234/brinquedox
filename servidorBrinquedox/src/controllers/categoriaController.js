const Categoria = require('../models/CategoriaModel');

class categoria{
    static async get(req,res){
        return res.send(await Categoria.find({})).end();
    }
    static async add(req,res){
        try {
            if(await Categoria.findOne({nome:req.body.nome}))
                return res.status(400).send({err:'Categoria já existe'}).end();
            let categoria = await Categoria.create(req.body);
            return res.send({categoria:categoria}).end();
        } catch (error) {
            return res.send({err:'Erro ao cadastrar'}).end()
        }
    }
    static async del(req,res){
        try {
            if(!await Categoria.findOne({nome:req.body.nome}))
                return res.status(404).send({err:'Categoria não encontrada'}).end();
            let categoria = await Categoria.deleteOne({nome:req.body.nome});
            return res.send({categoria:categoria}).end();
        } catch (error) {
            return res.send({err:'Erro ao apagar'}).end()
        }
    }

    static async alter(req,res){
        try {
            if(!await Categoria.findOne({nome:req.body.nome}))
                return res.status(404).send({err:'Categoria não encontrada'}).end();
            let categoria = await Categoria.updateOne({nome:req.body.nome},
                {$set:{nome:req.body.newnome}});
            return res.send({categoria:categoria}).end();
        } catch (error) {
            return res.send({err:'Erro ao atualizar'}).end()
        }
    }
    
}

module.exports = categoria;