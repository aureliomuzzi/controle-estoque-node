const EstoqueService = require('../services/EstoqueService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let estoqueGeral = await EstoqueService.buscarTodos();

        for(let i in estoqueGeral) {
            json.result.push({
                produto: estoqueGeral[i].produto,
                fornecedor: estoqueGeral[i].fornecedor,
                quantidade: estoqueGeral[i].quantidade,
                data_entrada: estoqueGeral[i].data_entrada,
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let estoque = await EstoqueService.buscarUm(id);

        if(estoque) {
            json.result = estoque;
        }

        res.json(json);
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };
        let { produto_id, fornecedor_id, quantidade, data_entrada } = req.body;
      
        if (produto_id && fornecedor_id) {
          let estoque = { produto_id, fornecedor_id, quantidade, data_entrada };
          let estoqueId = await EstoqueService.inserir(estoque);
          estoque.id = estoqueId;
          json.result = estoque;
        } else {
          json.error = 'Campos não enviados';
        }
        res.json(json);
    },      

    alterar: async(req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let estoque = req.body;

        if(id) {
            await EstoqueService.alterar(id, estoque);
            json.result = {
                id,
                produto_id,
                fornecedor_id,
                quantidade,
                data_entrada
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await EstoqueService.excluir(req.params.id);

        res.json(json);
    }
}