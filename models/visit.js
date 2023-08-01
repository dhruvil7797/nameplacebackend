const Sequelize = require("sequelize");
const { visitModelKey } = require("../keys/visitkey");

module.exports = (sequelize) => {
  return sequelize.define("visit", {
    [visitModelKey.id]: {
      type: Sequelize.INTEGER,
      autoincrement: true,
      allowNull: false,
      primaryKey: true,
    },
    [visitModelKey.personId]: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    [visitModelKey.placeId]: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    [visitModelKey.toDate]: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    [visitModelKey.fromDate]: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  });
};
