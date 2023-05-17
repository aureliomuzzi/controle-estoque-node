const ProdutoService = require('../services/ProdutoService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let produtos = await ProdutoService.buscarTodos();

        for(let i in produtos) {
            json.result.push({
                nome: produtos[i].nome,
                quantidade: produtos[i].quantidade,
                preco: produtos[i].preco,
                data_atualizacao: produtos[i].data_atualizacao,
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let produto = await ProdutoService.buscarUm(id);

        if(produto) {
            json.result = produto;
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let quantidade = req.body.quantidade;
        let preco = req.body.preco;
        let data_atualizacao = req.body.data_atualizacao;

        if (nome){
            let ProdutoId = await ProdutoService.inserir(nome, quantidade, preco, data_atualizacao);
            json.result = {
                id: ProdutoId,
                nome,
                quantidade,
                preco,
                data_atualizacao
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
        let quantidade = req.body.quantidade;
        let preco = req.body.preco;
        let data_atualizacao = req.body.data_atualizacao;

        if(id) {
            await ProdutoService.alterar(id, nome, quantidade, preco, data_atualizacao);
            json.result = {
                id,
                nome,
                quantidade,
                preco,
                data_atualizacao
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await ProdutoService.excluir(req.params.id);

        res.json(json);
    }
}