const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Programas = require('../models/Programas');
const ProgramasDetalhes = require('../models/ProgramasDetalhes');


const connection = new Sequelize(dbConfig);

Programas.init(connection);
ProgramasDetalhes.init(connection);



module.exports = connection;