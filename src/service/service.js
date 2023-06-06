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
    },
    procurarlivro: (livro_id) =>{
        return new Promise((accept,reject)=>{
            bd.query('SELECT * FROM livro WHERE livro_id = ?', [livro_id], (error, results)=>{
                if(error){
                    reject(error);
                    return;
                }
                if(results.length > 0){
                    accept(results[0]);
                } else {
                    accept(false)
                }
            })
        })
    }
}