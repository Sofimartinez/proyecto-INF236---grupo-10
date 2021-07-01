'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_evaluacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    tipo_evaluacion.hasMany(models.planificacion_evaluacion,{
      foreignKey: "id_evaluacion"
    })
    }
  };
  tipo_evaluacion.init({
    id_evaluacion: {
      type:DataTypes.INTEGER,
      primaryKey: true},
    tipo_evaluacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo_evaluacion',
    timestamps: false
  });
  return tipo_evaluacion;
};