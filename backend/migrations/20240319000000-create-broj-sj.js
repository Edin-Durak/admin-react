"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("broj_sj", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      broj: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idMapa: {
        type: Sequelize.STRING,
      },
      duzina: {
        type: Sequelize.STRING,
      },
      sirina: {
        type: Sequelize.STRING,
      },
      iskoristivaDuzina: {
        type: Sequelize.STRING,
      },
      iskoristivaSirina: {
        type: Sequelize.STRING,
      },
      maxBrojOdraslih: {
        type: Sequelize.INTEGER,
      },
      maxBrojDjece: {
        type: Sequelize.INTEGER,
      },
      vrsta: {
        type: Sequelize.STRING,
      },
      osuncanost: {
        type: Sequelize.STRING,
      },
      podloga: {
        type: Sequelize.STRING,
      },
      panoramaSlika: {
        type: Sequelize.STRING,
      },
      slike: {
        type: Sequelize.JSON,
      },
      dostupna: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      samoNaUpit: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      pausl: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      noClick: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      header: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      nePrikazujBroj: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      napomena: {
        type: Sequelize.TEXT,
      },
      wifi: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      parking: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      struja6A: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      struja10A: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      struja16A: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      prikljucakVode: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      odvodnja: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("broj_sj");
  },
};
