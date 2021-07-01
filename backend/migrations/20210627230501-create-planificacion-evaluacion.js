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
      id_profesor_asig: {
        type: Sequelize.INTEGER,
        references:{
          model:"profesor_asignaturas",
          key:"id_profesor_asig",
          as:"id_profesor_asig"
        }
      },
      fecha: {
        type: Sequelize.DATE
      },
      contenido: {
        type: Sequelize.STRING
      },
      unidad: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('planificacion_evaluacions');
  }
};