'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      rut: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tipo: {
        type: Sequelize.INTEGER,
        references:{
          model:"tipo_usuarios",
          key: "id_tipo",
          as:"id:tipo"
        }
      },
      nombre: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};