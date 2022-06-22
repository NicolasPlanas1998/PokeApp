const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('property',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true // CONFIGURAR LUEGO PARA QUE NO SE ME PISE CON LA API
        },
        name: {
            type: DataTypes.STRING
        }
    })

}