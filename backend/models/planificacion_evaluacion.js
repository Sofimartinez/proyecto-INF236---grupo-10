'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class planificacion_evaluacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      planificacion_evaluacion.belongsTo(models.tipo_evaluacion,{
        foreignKey: "id_evaluacion"
      })
      planificacion_evaluacion.belongsTo(models.curso_asignatura,{
        foreignKey: "id_curso_asig"
      })
    }
  };
  planificacion_evaluacion.init({
    id_planificacion:{
      type:DataTypes.INTEGER,
      primaryKey: true},
    id_curso_asig: DataTypes.INTEGER,
    id_evaluacion: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    contenido: DataTypes.STRING,
    titulo: DataTypes.STRING,
    unidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'planificacion_evaluacion',
    timestamps: false
  });
  return planificacion_evaluacion;
};