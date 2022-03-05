const express = require('express')
const rotas = express.Router()

let cursosInfo = [
    {'curso':'node', 'info':'curso de NodeJS'},
    {'curso':'javascript', 'info':'curso de Javascript'},
    {'curso':'react', 'info':'curso de React'},
    {'curso':'python', 'info':'curso de Python'},
    {'curso':'vue', 'info':'curso de Vue'},
]

rotas.get('/',(req,res)=>{
    res.json({ola:'Seja bem vindo'})
})

rotas.get('/:cursoId',(req,res)=>{
    const curso = req.params.cursoId
    const infoCurso = cursosInfo.find(i => i.curso == curso)
    if(!infoCurso){
        res.status(400).json({erro: `Curso "${curso}" não encontrado`})
    }else{
        res.status(200).json(infoCurso)
    }
})

module.exports = rotas