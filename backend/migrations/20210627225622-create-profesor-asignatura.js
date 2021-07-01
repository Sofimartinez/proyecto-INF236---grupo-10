'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profesor_asignaturas', {
      rut_profesor: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:"usuarios",
          key:"rut",
          as:"rut_profesor"
        }
      },
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
      id_profesor_asig: {
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('profesor_asignaturas');
  }
};