'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curso_asignatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      curso_asignatura.belongsTo(models.asignatura,{
        foreignKey: "nombre_asignatura"
      })
      curso_asignatura.belongsTo(models.curso,{
        foreignKey: "letra_grado"
      })
      curso_asignatura.hasMany(models.material,{
        foreignKey: "id_curso_asig"
      })
      curso_asignatura.hasMany(models.planificacion_evaluacion,{
        foreignKey: "id_curso_asig"
      })
      curso_asignatura.belongsTo(models.usuario,{
        foreignKey: "rut_profesor"
      })
    }
  };
  curso_asignatura.init({
    nombre_asignatura: {
      type:DataTypes.STRING,
      primaryKey: true},
    letra_grado: {
      type:DataTypes.STRING,
      primaryKey: true},
    descripcion: DataTypes.STRING,
    id_curso_asig: DataTypes.INTEGER,
    rut_profesor: {
      type:DataTypes.INTEGER,
      primaryKey: true},
  }, {
    sequelize,
    modelName: 'curso_asignatura',
    timestamps: false
  });
  return curso_asignatura;
};