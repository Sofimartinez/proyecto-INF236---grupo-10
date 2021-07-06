'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class asignatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      asignatura.hasMany(models.curso_asignatura,{
        foreignKey: "nombre_asignatura"
      })
    }
  };
  asignatura.init({
    nombre_asignatura: {
      type:DataTypes.STRING,
      primaryKey: true},
  }, {
    sequelize,
    modelName: 'asignatura',
    timestamps: false
  });
  return asignatura;
};