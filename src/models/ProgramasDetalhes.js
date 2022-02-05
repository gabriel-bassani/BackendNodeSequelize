const { Model, DataTypes } = require('sequelize');

class ProgramasDetalhes extends Model {
    static init(sequelize){
        super.init({
            nome_estacao: DataTypes.STRING,
            data_criacao: DataTypes.STRING,
            versao: DataTypes.STRING,
            caminho: DataTypes.STRING,
            id_programa: DataTypes.INTEGER,
            ip: DataTypes.STRING,
        }, {
            sequelize
        })
        
    }

}

module.exports = ProgramasDetalhes;