'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cursos', {
      letra_grado: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      rut_profesor: {
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
    await queryInterface.dropTable('cursos');
  }
};