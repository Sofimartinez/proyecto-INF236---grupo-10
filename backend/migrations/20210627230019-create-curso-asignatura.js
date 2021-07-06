'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('curso_asignaturas', {
      nombre_asignatura: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references:{
          model:"asignaturas",
          key:"nombre_asignatura",
          as:"nombre_asignatura"
        }
      },
      letra_grado: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references:{
          model:"cursos",
          key:"letra_grado",
          as:"letra_grado"
        }
      },
      descripcion: {
        type: Sequelize.STRING
      },
      id_curso_asig: {
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      rut_profesor: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:"usuarios",
          key:"rut",
          as:"rut_profesor"
        }
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('curso_asignaturas');
  }
};