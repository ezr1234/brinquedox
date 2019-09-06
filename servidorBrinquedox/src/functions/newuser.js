const MongoClient = require('mongodb').MongoClient;

module.exports = async (req,res,url)=> {
  let nome = req.body.nome;
  let email = req.body.email;
  let senha = req.body.senha;
  let cep = req.body.cep;
  let endereco = req.body.endereco;
  let numero = req.body.numero;
  let cpf = req.body.endereco;
  let carrinho = []
  if(nome&&email&&senha&&cep&&endereco&&numero&&cpf){
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("loja");
    dbo.collection("usuarios").findOne({email:email},(err,result) =>{
      if (err) {console.log(err)};
      if (result){
        res.sendStatus(403);
        db.close();
       }
      else{
        var myobj = { 
          nome: nome,
          email:email,
          senha:senha,
          cep:cep,
          cpf:cpf,
          endereco:endereco,
          numero:numero,
          carrinho:carrinho
       };
         dbo.collection("usuarios").insertOne(myobj, function(err, result) {
          if (err) throw err;
          res.send('1 documento cadastrado');
          db.close();
          });
        }
      })
    });

  }else{
    res.sendStatus(400);
    res.end();
  }
}
