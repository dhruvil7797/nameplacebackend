const { Op, Sequelize } = require("sequelize");
const { placeModelKey } = require("../keys/placeKey");
const { Place } = require("../utils/database");
const { v4: uuidv4 } = require("uuid");

module.exports = function () {
  var module = {};

  module.getAutoSuggestion = async (req, res) => {
    const { searchKey, state, city } = req.body;

    let whereClause = {};

    if (state && state != "") {
      whereClause[placeModelKey.state] = state;
    }

    if (city && city != "") {
      whereClause[placeModelKey.city] = city;
    }

    let places = await Place.findAll({
      where: {
        [Op.or]: {
          [placeModelKey.placeName]: { [Op.like]: `%${searchKey}%` },
          [placeModelKey.address]: { [Op.like]: `%${searchKey}%` },
          [placeModelKey.city]: { [Op.like]: `%${searchKey}%` },
          [placeModelKey.state]: { [Op.like]: `%${searchKey}%` },
        },
        ...whereClause,
      },
    });

    res.send({ success: true, places: places });
  };

  module.getState = async (req, res) => {
    let states = await Place.findAll({
      attributes: [
        [
          Sequelize.fn("DISTINCT", Sequelize.col(placeModelKey.state)),
          placeModelKey.state,
        ],
      ],
    });

    res.send({ success: true, states: states });
  };

  module.getCity = async (req, res) => {
    const { state } = req.body;
    let city = await Place.findAll({
      attributes: [
        [
          Sequelize.fn("DISTINCT", Sequelize.col(placeModelKey.city)),
          placeModelKey.city,
        ],
      ],
      where: {
        [placeModelKey.state]: state,
      },
    });

    res.send({ success: true, city: city });
  };

  module.getSearch = async (req, res) => {
    const { searchKey, state, city } = req.body;

    let whereClause = {};

    if (state && state != "") {
      whereClause[placeModelKey.state] = state;
    }

    if (city && city != "") {
      whereClause[placeModelKey.city] = city;
    }

    let places = await Place.findAll({
      where: {
        [Op.or]: {
          [placeModelKey.placeName]: { [Op.like]: `%${searchKey}%` },
          [placeModelKey.address]: { [Op.like]: `%${searchKey}%` },
          [placeModelKey.city]: { [Op.like]: `%${searchKey}%` },
          [placeModelKey.state]: { [Op.like]: `%${searchKey}%` },
        },
        ...whereClause,
      },
    });

    res.send({ success: true, places: places });
  };

  module.postAddPlace = async (req, res) => {
    const { name, address, city, state, phonenumber, contactPersonName } =
      req.body;

    console.log(req.files);

    // let place = await Place.create({
    //   [placeModelKey.id]: uuidv4(),
    //   [placeModelKey.placeName]: name,
    //   [placeModelKey.address]: address,
    //   [placeModelKey.city]: city,
    //   [placeModelKey.state]: state,
    //   [placeModelKey.contactName]: contactPersonName,
    //   [placeModelKey.phone]: phonenumber,
    //   [placeModelKey.photo]: gender,
    // });

    res.send({ success: true });
  };

  return module;
};
