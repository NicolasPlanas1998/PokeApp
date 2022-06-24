const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    life:{
      type: DataTypes.FLOAT
    },
    attack:{
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
    },
    pokeApp:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    }
  },
    {timestamps:false}
  );
};
