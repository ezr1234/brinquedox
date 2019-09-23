const Fornecedor = require('../models/FornecedorModel');

class fornecedor{
    static async get(req,res){
        return res.send(await Fornecedor.find({})).end();
    }
    static async add(req,res){
        try {
            if(await Fornecedor.findOne({nome:req.body.nome}))
                return res.status(400).send({err:'Fornecedor já existe'}).end();
            let fornecedor = await Fornecedor.create(req.body);
            return res.send({fornecedor:fornecedor}).end();
        } catch (error) {
            return res.send({err:'Erro ao cadastrar'}).end()
        }
    }
    static async del(req,res){
        try {
            if(!await Fornecedor.findOne({nome:req.body.nome}))
                return res.status(404).send({err:'Fornecedor não encontrado'}).end();
            let fornecedor = await Fornecedor.deleteOne({nome:req.body.nome,cnpj:req.body.cnpj});
            return res.send({fornecedor:fornecedor}).end();
        } catch (error) {
            return res.send({err:'Erro ao apagar'}).end()
        }
    }

    static async alter(req,res){
        try {
            if(!await Fornecedor.findOne({nome:req.body.nome}))
                return res.status(404).send({err:'Fornecedor não encontrado'}).end();
            let fornecedor = await Fornecedor.updateOne({nome:req.body.nome,cnpj:req.body.cnpj},
                {$set:{nome:req.body.newnome,uf:req.body.newuf}});
            return res.send({fornecedor:fornecedor}).end();
        } catch (error) {
            return res.send({err:'Erro ao atualizar'}).end()
        }
    }
}

module.exports = fornecedor;