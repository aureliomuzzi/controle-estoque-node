const FornecedorService = require('../services/FornecedorService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let fornecedores = await FornecedorService.buscarTodos();

        for(let i in fornecedores) {
            json.result.push({
                nome: fornecedores[i].nome,
                cep: fornecedores[i].cep,
                logradouro: fornecedores[i].logradouro,
                numero: fornecedores[i].numero,
                complemento: fornecedores[i].complemento,
                bairro: fornecedores[i].bairro,
                localidade: fornecedores[i].localidade,
                uf: fornecedores[i].uf,
                telefone: fornecedores[i].telefone,
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let fornecedor = await FornecedorService.buscarUm(id);

        if(fornecedor) {
            json.result = fornecedor;
        }

        res.json(json);
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };
        let { nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone } = req.body;
      
        if (nome) {
          let fornecedor = { nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone };
          let fornecedorId = await FornecedorService.inserir(fornecedor);
          fornecedor.id = fornecedorId;
          json.result = fornecedor;
        } else {
          json.error = 'Campos não enviados';
        }
        res.json(json);
    },      

    alterar: async(req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let fornecedor = req.body;

        if(id) {
            await FornecedorService.alterar(id, fornecedor);
            json.result = {
                id,
                nome,
                cep,
                logradouro,
                numero,
                complemento,
                bairro,
                localidade, 
                uf,
                telefone
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await FornecedorService.excluir(req.params.id);

        res.json(json);
    }
}