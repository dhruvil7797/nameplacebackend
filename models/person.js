const Sequelize = require("sequelize");
const { personModelKey } = require("../keys/personkey");

module.exports = (sequelize) => {
  return sequelize.define("person", {
    [personModelKey.id]: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    [personModelKey.personName]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [personModelKey.personGujName]: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    [personModelKey.sampraday]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [personModelKey.guruId]: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    [personModelKey.gender]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
};
