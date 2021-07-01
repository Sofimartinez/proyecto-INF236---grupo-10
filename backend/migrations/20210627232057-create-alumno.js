'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alumnos', {
      rut_alumno: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:"usuarios",
          key:"rut",
          as:"rut_alumno"
        }
      },
      rut_apoderado: {
        type: Sequelize.INTEGER,
        references:{
          model:"apoderados",
          key:"rut_apoderado",
          as:"rut_apoderado"
        }
      },
      letra_grado: {
        type: Sequelize.STRING,
        references:{
          model:"cursos",
          key:"letra_grado",
          as:"letra_grado"
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('alumnos');
  }
};