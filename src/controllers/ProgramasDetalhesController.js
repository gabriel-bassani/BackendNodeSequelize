const ProgramasDetalhes = require("../models/ProgramasDetalhes");

  
module.exports = {
    async all(req, res) {
        try{
            const programasDetalhes = await ProgramasDetalhes.findAll();
            return res.json(programasDetalhes);

        } catch(err){
            console.log('There was an error!', err);
        }

    },
    async store(req, res) {
        const { nome_estacao, data_criacao, versao, caminho, ip, id_programa } = req.body;

        
        await ProgramasDetalhes.destroy({
            where: {
              ip: ip,
              id_programa: id_programa
            }
        });


        const programaDetalhe = await ProgramasDetalhes.create({
            nome_estacao,
            data_criacao,
            versao,
            caminho,
            id_programa,
            ip,
        });

        let str = 'gabriel';
        

        return res.json(programaDetalhe);
    },

    
};