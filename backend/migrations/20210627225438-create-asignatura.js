'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('asignaturas', {
      nombre_asignatura: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('asignaturas');
  }
};