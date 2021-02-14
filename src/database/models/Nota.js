const { DataTypes } = require("sequelize");
module.exports = (sequelize, dataTypes) => {
    let alias = "Nota";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            NotNull: true
        },
        titulo: {
            type: DataTypes.STRING,
            NotNull: true
        },
        texto: {
            type: DataTypes.STRING,
            NotNull: true
        }, /*
         created_at: {
            type: DataTypes.TIMESTAMP(6),
            NotNull: true
     },
        updated_at: {
            type: DataTypes.TIMESTAMP(6),
            NotNull: false
        },
        deleted_at: {
            type: DataTypes.TIMESTAMP(6),
            NotNull: false
        } */
    };

    let config = {
        tableName: "notas",
        timestamps: true, 
        underscored: true, 
        paranoid:true
    }
    const Nota = sequelize.define(alias, cols, config)
    return Nota;

    }

   
