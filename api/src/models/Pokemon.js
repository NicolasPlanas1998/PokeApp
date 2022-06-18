const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life:{
      type: DataTypes.FLOAT
    },
    atack:{
      type: DataTypes.FLOAT
    },
    defense:{
      type: DataTypes.FLOAT
    },
    speed:{
      type: DataTypes.FLOAT
    },
    height:{
      type: DataTypes.FLOAT
    },
    weight:{
      type: DataTypes.FLOAT
    }
  },
    {timestamps:false}
  );
};
