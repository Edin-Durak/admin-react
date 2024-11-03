const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  const BrojSJ = sequelize.define(
    "BrojSJ",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      broj: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      vrsta_sj_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      idMapa: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      duzina: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sirina: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      iskoristivaDuzina: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      iskoristivaSirina: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      maxBrojOdraslih: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      maxBrojDjece: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      vrsta: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      osuncanost: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      podloga: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      panoramaSlika: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      slike: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      dostupna: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      samoNaUpit: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      pausl: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      noClick: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      header: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      nePrikazujBroj: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      napomena: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      wifi: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      parking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      struja6A: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      struja10A: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      struja16A: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      prikljucakVode: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      odvodnja: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "broj_sj",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return BrojSJ;
};
