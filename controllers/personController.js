const { Sequelize, Op } = require("sequelize");
const { Person } = require("../utils/database");
const { personModelKey } = require("../keys/personkey");
const { v4: uuidv4 } = require("uuid");

module.exports = function () {
  var module = {};

  module.getAutoSuggestion = async (req, res) => {
    const { searchKey, sampraday } = req.body;

    let whereClause = {};

    if (sampraday && sampraday != "") {
      whereClause[personModelKey.sampraday] = sampraday;
    }

    let persons = await Person.findAll({
      where: {
        [Op.or]: {
          [personModelKey.personName]: { [Op.like]: `%${searchKey}%` },
        },
        ...whereClause,
      },
    });

    res.send({ success: true, persons: persons });
  };

  module.getSampradaya = async (req, res) => {
    let sampraday = await Person.findAll({
      attributes: [
        [
          Sequelize.fn("DISTINCT", Sequelize.col(personModelKey.sampraday)),
          personModelKey.sampraday,
        ],
      ],
    });

    res.send({ success: true, sampraday: sampraday });
  };

  module.getSearch = async (req, res) => {
    const { searchKey, sampraday } = req.body;

    let whereClause = {};

    if (sampraday && sampraday != "") {
      whereClause[personModelKey.sampraday] = sampraday;
    }

    let persons = await Person.findAll({
      where: {
        [Op.or]: {
          [personModelKey.personName]: { [Op.like]: `%${searchKey}%` },
        },
        ...whereClause,
      },
    });

    res.send({ success: true, persons: persons });
  };

  module.getGuruList = async (req, res) => {
    let persons = await Person.findAll({
      where: {
        [personModelKey.guruId]: { [Op.eq]: null },
      },
    });

    res.send({ success: true, people: persons });
  };

  module.postAddPerson = async (req, res) => {
    const { name, gujName, sampraday, guruId, gender } = req.body;

    let people = await Person.create({
      [personModelKey.id]: uuidv4(),
      [personModelKey.personName]: name,
      [personModelKey.personGujName]: gujName,
      [personModelKey.sampraday]: sampraday,
      [personModelKey.guruId]: guruId,
      [personModelKey.gender]: gender,
    });

    res.send({ success: true, people: people });
  };

  return module;
};
