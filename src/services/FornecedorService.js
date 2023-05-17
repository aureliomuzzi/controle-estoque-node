const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM fornecedores', (error, results) => {
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
            db.query('SELECT * FROM fornecedores WHERE id = ?', [id], (error, results) => {
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

    inserir: (fornecedor) => {
        return new Promise((aceito, rejeitado) => {
            const {nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone} = fornecedor;
            db.query('INSERT INTO fornecedores (nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone) VALUES (?,?,?,?,?,?,?,?,?)', 
                [nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.insertId); 
            });
        });
    },

    alterar: (id, fornecedor) => {
        return new Promise((aceito, rejeitado) => {
            const {nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone} = fornecedor;
            db.query('UPDATE fornecedores SET nome = ?, cep = ?, logradouro = ?, numero = ?, complemento = ?, bairro = ?, localidade = ?, uf = ?, telefone = ? WHERE id = ?', 
                [nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone, id], (error, results) => {
                if(error) {
                    rejeitado(error);
                    return;
                }
            });
        });
    },

    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM fornecedores WHERE id = ?', [id], (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }
};