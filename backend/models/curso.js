'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      curso.belongsTo(models.usuario,{
        foreignKey: "rut_profesor"
      })
      curso.hasMany(models.curso_asignatura,{
        foreignKey: "letra_grado"
      })
      curso.hasMany(models.alumno,{
        foreignKey: "letra_grado"
      })
    }
  };
  curso.init({
    letra_grado: {
      type:DataTypes.STRING,
      primaryKey: true},
    rut_profesor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'curso',
    timestamps: false
  });
  return curso;
};