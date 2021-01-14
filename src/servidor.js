const porta = 3003
const express = require('express')
const Banco = require('./banco')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({extended: true}))
app.get('/produtos', (req, res, next) => {
    res.send(Banco.getProdutos()) // vai ser convertido para json 
})
app.get('/produtos/:id', (req, res, next) =>{
    res.send(Banco.getProduto(req.params.id))
})
app.post('/produtos', (req, res, next) =>{
    const produto = Banco.salvarProdutos({
        nome: req.body.name,
        preco: req.body.preco

    })
    req.send(produto) //JSON
})
app.put('/produtos/:id', (req, res, next) =>{
    const produto = Banco.salvarProdutos({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco

    })
    req.send(produto) //JSON
})
pp.delete('/produtos/:id', (req, res, next) =>{
    const produto = Banco.excluirProdutos(req.params.id)
    req.send(produto) //JSON
})
app.listen(porta, ()=>{
    console.log(`servidor executando na porta ${porta}.`)
})