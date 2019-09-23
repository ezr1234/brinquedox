const Produto = require('../models/ProdutoModel'),
Categoria = require('../models/CategoriaModel');

class produto{
    static async get(req,res){
        return await Produto.find({}).populate('categoria')
        .exec(function (err, doors) {
          if (err){
            return res.status(500).send('Error in reading door and user')
          }     
          return res.send(doors).end();
        })
    }
    static async add(req,res){
        let {
            nome,
            peso,
            dimensoes,
            marca,
            imagem,
            valor,
            categoria,
            descricao
        } = req.body;
        try {
            if(await Produto.findOne({nome:req.body.nome}))
                return res.status(400).send({err:'Produto já existe'}).end();

            let idCat = await Categoria.findOne({nome:categoria});
            let produto = await Produto.create({
                nome:nome,
                categoria:idCat,
                peso:peso,
                marca:marca,
                imagem:imagem,
                valor:valor,
                descricao:descricao,
                dimensoes:dimensoes
            });
            return res.send({produto:produto}).end();
        } catch (error) {
            return res.status(400).send({err:'Erro ao cadastrar'}).end()
        }
    }
    static async del(req,res){
        try {
            if(!await Produto.findOne({nome:req.body.nome}))
                return res.status(404).send({err:'Produto não encontrado'}).end();
            let produto = await Produto.deleteOne({nome:req.body.nome});
            return res.send({produto:produto}).end();
        } catch (error) {
            return res.send({err:'Erro ao apagar'}).end()
        }
    }

    static async alter(req,res){
        try {
            if(!await Produto.findOne({nome:req.body.nome}))
                return res.status(404).send({err:'Produto não encontrado'}).end();
            let produto = await Produto.updateOne({nome:req.body.nome},
                {$set:{nome:req.body.newnome,valor:req.body.newvalor}});
            return res.send({produto:produto}).end();
        } catch (error) {
            return res.send({err:'Erro ao atualizar'}).end()
        }
    }
}

module.exports = produto;