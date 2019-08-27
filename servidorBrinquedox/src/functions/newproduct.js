const MongoClient = require('mongodb').MongoClient;

module.exports = async(req,res,url) =>{
  let nome = req.body.nome;
    let categoria = req.body.categoria;
    let peso = req.body.peso;
    let dimensoes = req.body.dimensoes;
    let marca = req.body.marca;
    let imagem = req.body.imagem;
    let valor = req.body.valor;
    let descricao = req.body.descricao;
    if(nome&&categoria&&peso&&dimensoes&&marca&&imagem&&valor&&descricao){
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("loja");
      dbo.collection("categorias").findOne({categoria:categoria},(err,result) =>{
        if (err) {console.log(err)};
        if (result){
          var myobj = { 
            nome: nome,
            categoria:categoria,
            peso:peso,
            dimensoes:dimensoes,
            marca:marca,
            imagem:imagem,
            valor:valor,
            descricao:descricao
         };
         dbo.collection("produtos").findOne({nome:nome},(err,result)=>{
            if(err){console.log(err)};
              if(result){
                res.sendStatus(403);
                db.close();
              }
              else{
                dbo.collection("produtos").insertOne(myobj, function(err, result) {
                  if (err) throw err;
                  res.send('1 documento cadastrado');
                  db.close();
                });
              }
            })
          }
          else{
            res.sendStatus(403);
            db.close();
          }
        })
      });
    }else{
      res.sendStatus(400);
      res.end();
    }
}