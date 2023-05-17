const UsuarioService = require('../services/UsuarioService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let usuarios = await UsuarioService.buscarTodos();

        for(let i in usuarios) {
            json.result.push({
                nome: usuarios[i].nome,
                email: usuarios[i].email,
                senha: usuarios[i].senha,
                data_criacao: usuarios[i].data_criacao,
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let usuario = await UsuarioService.buscarUm(id);

        if(usuario) {
            json.result = usuario;
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let data_criacao = req.body.data_criacao;

        if (nome){
            let UsuarioId = await UsuarioService.inserir(nome, email, senha, data_criacao);
            json.result = {
                id: UsuarioId,
                nome,
                email,
                senha,
                data_criacao
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let data_criacao = req.body.data_criacao;

        if(id) {
            await UsuarioService.alterar(id, nome, email, senha, data_criacao);
            json.result = {
                id,
                nome, 
                email, 
                senha, 
                data_criacao
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await UsuarioService.excluir(req.params.id);

        res.json(json);
    }
}