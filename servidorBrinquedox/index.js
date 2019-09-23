const express = require('express'),
morgan = require('morgan'),
helmet = require('helmet'),
app = express(),
cors = require('cors');

app.use(express.json())

app.use(morgan('dev'))

app.use(helmet());

app.use(cors());

app.use('/api',require('./src/routes'))

app.listen(port = process.env.PORT || 80);

console.log("Rodando na porta:",port)