const { Model, DataTypes } = require('sequelize');

class Programas extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            caminho: DataTypes.STRING,
        }, {
            sequelize
        })

    }

}

module.exports = Programas;