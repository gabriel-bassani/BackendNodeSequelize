module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('programas_detalhes', 'ip', {
        type: Sequelize.STRING,
        allowNull: false
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn('programas_detalhes', 'ip')]);
  },
};