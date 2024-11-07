const mongoose = require('mongoose');
const Professor = mongoose.model('Professor', {
    id: String,
    nome: String,
    idade: String,
    departamento: String,
    turmas: Array
}, 'professores');

module.exports = Professor;