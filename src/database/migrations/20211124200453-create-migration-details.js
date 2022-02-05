'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('programas_detalhes', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome_estacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_criacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      versao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      caminho: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_programa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
     });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('programas_detalhes');
  }
};
