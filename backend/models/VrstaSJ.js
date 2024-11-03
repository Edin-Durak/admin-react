module.exports = (sequelize, DataTypes) => {
  const VrstaSJ = sequelize.define(
    "VrstaSJ",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      naziv: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      opis: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vrsta: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      oznaka: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      oznakaPMS: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      oznakaBooking: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pmsId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bookingId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bookingCjenik: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      maxOdraslih: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      maxDjece: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      boja: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      slike: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      tableName: "vrsta_sj",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return VrstaSJ;
};
