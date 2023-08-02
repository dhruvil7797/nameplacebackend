const Sequelize = require("sequelize");
const { userModelKey } = require("../keys/userkey");

module.exports = (sequelize) => {
  return sequelize.define("ssuser", {
    [userModelKey.id]: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    [userModelKey.fname]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [userModelKey.lname]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [userModelKey.email]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [userModelKey.password]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [userModelKey.phone]: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    [userModelKey.city]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    [userModelKey.state]: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
};
