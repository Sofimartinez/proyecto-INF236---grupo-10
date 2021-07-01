'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class calificacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      calificacion.belongsTo(models.curso_asignatura,{
        foreignKey: "id_curso_Asig"
      })
      calificacion.belongsTo(models.alumno,{
        foreignKey: "rut_alumno"
      })
    }
  };
  calificacion.init({
    id_calificacion: {
      type:DataTypes.INTEGER,
      primaryKey: true},
    id_curso_asig: DataTypes.INTEGER,
    rut_alumno: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'calificacion',
    timestamps: false
  });
  return calificacion;
};