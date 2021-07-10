'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('planificacion_evaluacions', {
      id_planificacion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_curso_asig: {
        type: Sequelize.INTEGER,
        references:{
          model:"curso_asignaturas",
          key:"id_curso_asig",
          as:"id_curso_asig"
        }
      },
      id_evaluacion: {
        type: Sequelize.INTEGER,
        references:{
          model:"tipo_evaluacions",
          key:"id_evaluacion",
          as:"id_evaluacion"
        }
      },
      fecha: {
        type: Sequelize.DATE
      },
      contenido: {
        type: Sequelize.TEXT
      },
      unidad: {
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('planificacion_evaluacions');
  }
};