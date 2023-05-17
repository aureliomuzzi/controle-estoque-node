const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM produtos', (error, results) => {
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
            db.query('SELECT * FROM produtos WHERE id = ?', [id], (error, results) => {
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

    inserir: (nome, quantidade, preco, data_atualizacao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO produtos (nome, quantidade, preco, data_atualizacao) VALUES (?,?,?,?)', [nome, quantidade, preco, data_atualizacao], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.insertId); 
            });
        });
    },

    alterar: (id, nome, quantidade, preco, data_atualizacao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE produtos SET nome = ?, quantidade = ?, preco = ?, data_atualizacao = ? WHERE id = ?', [nome, quantidade, preco, data_atualizacao, id], (error, results) => {
                if(error) {
                    rejeitado(error);
                    return;
                }
            });
        });
    },

    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM produtos WHERE id = ?', [id], (error, results) => {
                if(error){
                    console.log("existe relacionamento");
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }
};