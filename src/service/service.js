const bd = require('../bd')

module.exports = {
    procurar: () =>{
        return new Promise((accept, reject)=>{
            bd.query('SELECT * FROM livro', (error,results)=>{
                if(error){
                    reject(error); return;
                } else {
                    accept(results)
                }
            });
        });
    }
}