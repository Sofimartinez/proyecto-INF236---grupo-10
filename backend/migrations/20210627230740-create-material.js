'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('materials', {
      nombre_archivo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      ruta: {
        type: Sequelize.STRING
      },
      id_curso_asig: {
        type: Sequelize.INTEGER,
        references:{
          model:"curso_asignaturas",
          key:"id_curso_asig",
          as:"id_curso_asig"
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('materials');
  }
};