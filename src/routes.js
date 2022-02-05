const express = require('express');
const ProgramasController = require('./controllers/ProgramasController');
const ProgramasDetalhesController = require('./controllers/ProgramasDetalhesController');

const routes = express.Router();

//routes.get('/infra/:id_programa/programas', ProgramasController.index);
//routes.get('/infra/programasDetalhes', ProgramasDetalhesController.All);
//routes.get('/infra/:id_programa/programasDetalhes', ProgramasDetalhesController.index);
routes.post('/infra/programas', ProgramasController.store);
routes.get('/infra/programas', ProgramasController.all);

routes.post('/infra/programasDetalhes', ProgramasDetalhesController.store);
routes.get('/infra/programasDetalhes', ProgramasDetalhesController.all);



module.exports = routes;