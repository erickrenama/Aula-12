const express = require('express');
const router = express.Router();
const userController = require('../controllers/usuarioController');

// Rota para obter todos os usuários
router.get('/', userController.obterTodos);

// Rota para criar um novo usuário
router.post('/', userController.inserir);

module.exports = router;
