const express = require('express');
const app = express();
var cors = require('cors');
let morgan = require('morgan');
var port;

app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.use('/', require('./src/routes'));

// eslint-disable-next-line no-undef
app.listen(port = process.env.PORT || 8080);

console.log("Servior rodando na porta:",port);
