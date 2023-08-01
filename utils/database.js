const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DBName,
  process.env.dbuserName,
  process.env.password,
  {
    dialect: process.env.dialect,
    host: process.env.host,
  }
);

const User = require("../models/user")(sequelize);
const Person = require("../models/person")(sequelize);
const Place = require("../models/place")(sequelize);
const Visit = require("../models/visit")(sequelize);

module.exports = { sequelize, User, Person, Place, Visit };
