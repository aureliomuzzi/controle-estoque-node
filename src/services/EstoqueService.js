const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query("SELECT e.id, p.nome as 'produto', f.nome as 'fornecedor', e.quantidade, e.data_entrada FROM estoque e inner join produtos p on p.id = e.produto_id inner join fornecedores f on f.id = e.fornecedor_id", 
                (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        })
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query("SELECT e.id, p.nome as 'produto', f.nome as 'fornecedor', e.quantidade, e.data_entrada FROM estoque e inner join produtos p on p.id = e.produto_id inner join fornecedores f on f.id = e.fornecedor_id WHERE e.id = ?", 
                [id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                if (results.length > 0) {
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (estoque) => {
        return new Promise((aceito, rejeitado) => {
            const {produto_id, fornecedor_id, quantidade, data_entrada} = estoque;
            db.query('INSERT INTO estoque (produto_id, fornecedor_id, quantidade, data_entrada) VALUES (?,?,?,?)', 
                [produto_id, fornecedor_id, quantidade, data_entrada], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.insertId); 
            });
        });
    },

    alterar: (id, estoque) => {
        return new Promise((aceito, rejeitado) => {
            const {nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone} = estoque;
            db.query('UPDATE fornecedores SET nome = ?, cep = ?, logradouro = ?, numero = ?, complemento = ?, bairro = ?, localidade = ?, uf = ?, telefone = ? WHERE id = ?', 
                [nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone, id], (error, results) => {
                if(error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM estoque WHERE id = ?', [id], (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }
};