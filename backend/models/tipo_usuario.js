'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tipo_usuario.hasMany(models.usuario,{
        foreignKey: "id_tipo"
      })
    }
  };
  tipo_usuario.init({
    id_tipo: {
      type:DataTypes.INTEGER,
      primaryKey: true},
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo_usuario',
    timestamps: false
  });
  return tipo_usuario;
};