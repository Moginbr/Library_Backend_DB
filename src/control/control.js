const service_control = require('../service/service')   

module.exports = {
    procurar: async(req, res) =>{
        let json = {error:``, result:[]};

        let livros = await service_control.procurar();

        for(i in livros){
            json.result.push({
                livID: livros[i].livro_id,
                nome: livros[i].nome,
                edit: livro[i].editora
            });
        }
        res.json(json)
    }
}