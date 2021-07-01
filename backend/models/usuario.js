'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.belongsTo(models.tipo_usuario,{
        foreignKey: "id_tipo"
      })
      usuario.hasMany(models.profesor_asignatura,{
        foreignKey: "rut_profesor"
      })
      usuario.hasMany(models.alumno,{
        foreignKey: "rut_alumno"
      })
      usuario.hasMany(models.apoderado,{
        foreignKey: "rut_apoderado"
      })
      usuario.hasMany(models.curso,{
        foreignKey: "rut_profesor"
      })
    }
  };
  usuario.init({
    rut: {
      type:DataTypes.STRING,
      primaryKey: true},
    id_tipo: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    contraseña: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
    timestamps: false
  });
  return usuario;
};