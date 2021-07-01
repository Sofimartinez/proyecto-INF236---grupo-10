'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profesor_asignatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      profesor_asignatura.belongsTo(models.usuario,{
        foreignKey: "rut_profesor"
      })
      profesor_asignatura.belongsTo(models.asignatura,{
        foreignKey: "nombre_asignatura"
      })
      profesor_asignatura.hasMany(models.planificacion_evaluacion,{
        foreignKey: "id_profesor_asig"
      })
    }
  };
  profesor_asignatura.init({
    rut_profesor: {
      type:DataTypes.INTEGER,
      primaryKey: true},
    nombre_asignatura:{
      type:DataTypes.STRING,
      primaryKey: true},
    id_profesor_asig: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'profesor_asignatura',
    timestamps: false
  });
  return profesor_asignatura;
};