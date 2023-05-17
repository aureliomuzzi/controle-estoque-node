const express =  require('express');
const router = express.Router();

const UsuarioController = require('./controllers/UsuarioController');
const ProdutoController = require('./controllers/ProdutoController');
const FornecedorController = require('./controllers/FornecedorController');
const EstoqueController = require('./controllers/EstoqueController');

// Rotas de Usuários
router.get('/usuarios', UsuarioController.buscarTodos);
router.get('/usuarios/:id', UsuarioController.buscarUm);
router.post('/usuario', UsuarioController.inserir);
router.put('/usuario/:id', UsuarioController.alterar);
router.delete('/usuario/:id', UsuarioController.excluir);

// Rotas de Produtos
router.get('/produtos', ProdutoController.buscarTodos);
router.get('/produtos/:id', ProdutoController.buscarUm);
router.post('/produto', ProdutoController.inserir);
router.put('/produto/:id', ProdutoController.alterar);
router.delete('/produto/:id', ProdutoController.excluir);

// Rotas de Fornecedores
router.get('/fornecedores', FornecedorController.buscarTodos);
router.get('/fornecedores/:id', FornecedorController.buscarUm);
router.post('/fornecedor', FornecedorController.inserir);
router.put('/fornecedor/:id', FornecedorController.alterar);
router.delete('/fornecedor/:id', FornecedorController.excluir);

// Rotas de Estoque
router.get('/estoque-geral', EstoqueController.buscarTodos);
router.get('/estoque-um/:id', EstoqueController.buscarUm);
router.post('/estoque', EstoqueController.inserir);
router.put('/estoque/:id', EstoqueController.alterar);
router.delete('/estoque/:id', EstoqueController.excluir);

module.exports = router;