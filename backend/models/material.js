'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      material.belongsTo(models.curso_asignatura,{
        foreignKey: "id_curso_asig"
      })
    }
  };
  material.init({
    nombre_archivo: {
      type:DataTypes.STRING,
      primaryKey: true},
    ruta: DataTypes.STRING,
    id_curso_asig: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'material',
    timestamps: false
  });
  return material;
};