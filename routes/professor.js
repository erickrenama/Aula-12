const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/', professorController.obterTodos);
router.get('/:id', professorController.obterUm);
router.get('/:id/turmas', professorController.obterTurmas);
router.put('/:id', professorController.atualizar);
router.post('/:id/turmas', professorController.adicionarTurma);
router.get('/departamento/:id', professorController.listarPorDepartamento);
router.delete('/:id', professorController.removerProfessor);


module.exports = router;