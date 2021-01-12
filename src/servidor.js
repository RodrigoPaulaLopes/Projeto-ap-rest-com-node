const porta = 3003
const express = require('express')

const app = express()
app.get('/produtos', (req, res, next) => {
    res.send({nome: "notebook", preco: 1340.42, }) // vai ser convertido para json 
})
app.listen(porta, ()=>{
    console.log(`servidor executando na porta ${porta}.`)
})