'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('calificacions', {
      id_calificacion: {
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
      rut_alumno: {
        type: Sequelize.INTEGER,
        references:{
          model:"alumnos",
          key:"rut_alumno",
          as:"rut_alumnos"
        }
      },
      nota: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('calificacions');
  }
};