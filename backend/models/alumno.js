'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      alumno.belongsTo(models.apoderado,{
        foreignKey: "rut_apoderado"
      })
      alumno.belongsTo(models.usuario,{
        foreignKey: "rut_alumno"
      })
      alumno.belongsTo(models.curso,{
        foreignKey: "letra_grado"
      })
    }
  };
  alumno.init({
    rut_alumno: {
      type:DataTypes.INTEGER,
      primaryKey: true},
    rut_apoderado: DataTypes.INTEGER,
    letra_grado: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'alumno',
    timestamps: false
  });
  return alumno;
};