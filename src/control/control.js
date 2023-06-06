const service_control = require('../service/service')   

module.exports = {
    procurar: async(req, res) =>{
        let json = {error:``, result:[]};

        let livros = await service_control.procurar();

        for(i in livros){
            json.result.push({
                livID: livros[i].livro_id,
                nome: livros[i].nome,
                edit: livros[i].editora
            });
        }
        res.json(json);
    },

    procurarlivro: async(req, res) =>{
        let json = {error:``, result:{}}; 

        let livroid = req.params.livro_id;
        let livro = await service_control.procurarlivro(livroid);

        if(livro){
            json.result = livro;
        }
        res.json(json);
    }

}