const express = require('express'),
router = express.Router(),
auth = require('./controllers/authController'),
produto = require('./controllers/produtoController'),
categoria = require('./controllers/categoriaController'),
user = require('./controllers/userController'),
fornecedor = require('./controllers/fornecedorController'),
authMiddleware = require('./middlewares/auth');


router.post('/login',auth.login)
router.post('/register',auth.register)


router.use(authMiddleware)
router.post('/add/produto',produto.add)
router.post('/add/categoria',categoria.add)
router.post('/add/fornecedor',fornecedor.add)

router.put('/alter/produto',produto.alter)
router.put('/alter/categoria',categoria.alter)
router.put('/alter/user',user.alter)
router.put('/alter/fornecedor',fornecedor.alter)

router.delete('/del/produto',produto.del)
router.delete('/del/categoria',categoria.del)
router.delete('/del/user',user.del)
router.delete('/del/fornecedor',fornecedor.del)

router.get('/get/produto',produto.get)
router.get('/get/categoria',categoria.get)
router.get('/get/user',user.get)
router.get('/get/fornecedor',fornecedor.get)





module.exports = router;