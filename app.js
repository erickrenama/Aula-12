const express = require('express');
const usuarioRouter = require('./routes/usuario');
const lista1Router = require('./routes/lista1');
const professorRouter = require('./routes/professor');


const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use('/usuario', usuarioRouter);
app.use('/lista1', lista1Router);
app.use('/professor', professorRouter);

mongoose.connect('mongodb+srv://erickrenan567:CmQ1heWqb0gJSTGI@cluster0.fibo2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3000');
        })
    })