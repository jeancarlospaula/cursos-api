const express = require('express')
const rotas = require('./Rotas/rotas')
const port = process.env.PORT

const app = express()

app.use('/',rotas)

app.listen(port, ()=>{console.log('Servidor Rodando')})
