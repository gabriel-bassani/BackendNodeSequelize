const Programas = require('../models/Programas');

module.exports = {
    async all(req, res) {
        const todosProgramas = await Programas.findAll();

        return res.json(todosProgramas);
    },

    async store(req, res) {
        const { nome, caminho } = req.body;

        const programas = await Programas.create({ nome, caminho });

        return res.json(programas);
    }
}