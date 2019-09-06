const MongoClient = require('mongodb').MongoClient;

module.exports = async(req,res,url) =>{
  let nome = req.body.nome;
    let email = req.body.email;
    if(nome&&email){
  MongoClient.connect(url, {useNewUrlParser:true}, (err,db) =>{
    if (err) {console.log(err)}
    let dbo = db.db("loja");
    dbo.collection("usuarios").deleteOne({nome:nome,email:email}, (err,result) =>{
      if(err) {console.log(err)}
      if(result.deletedCount === 1){
        res.end('1 Usuário apagado');
      }
        else{
          res.sendStatus(404);
        }

        })
      })
    }else{
        res.sendStatus(400);
        res.end();
      }
}