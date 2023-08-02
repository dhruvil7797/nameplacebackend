const Sequelize = require("sequelize");
const { placeModelKey } = require("../keys/placeKey");

module.exports = (sequelize) => {
  return sequelize.define("place", {
    [placeModelKey.id]: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    [placeModelKey.placeName]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [placeModelKey.address]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [placeModelKey.city]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [placeModelKey.state]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [placeModelKey.phone]: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    [placeModelKey.contactName]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [placeModelKey.photo]: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
};
