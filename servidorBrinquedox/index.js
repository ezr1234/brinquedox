const express = require('express');
const app = express();
var cors = require('cors');
var port;

app.use(cors());
app.use(express.json());
app.use('/', require('./src/routes'));

// eslint-disable-next-line no-undef
app.listen(port = process.env.PORT || 80);

console.log("Servior rodando na porta:",port);
