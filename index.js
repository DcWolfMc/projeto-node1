const express = require("express")
const app = express()

//criando a rota inicial

app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
})

//rota do cadastro de produtos
app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos!</h1>");
})

app.listen(4000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})