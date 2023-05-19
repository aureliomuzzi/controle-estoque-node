const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM usuarios', (error, results) => {
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
            db.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) => {
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

    inserir: (nome, email, senha, data_criacao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO usuarios (nome, email, senha, data_criacao) VALUES (?,?,?,?)', [nome, email, senha, data_criacao], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.insertId); 
            });
        });
    },

    alterar: (id, nome, email, senha, data_criacao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE usuarios SET nome = ?, email = ?, senha = ?, data_criacao = ? WHERE id = ?', [nome, email, senha, data_criacao, id], (error, results) => {
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
            db.query('DELETE FROM usuarios WHERE id = ?', [id], (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }
};