module.exports = function () {
  const express = require("express");
  const router = express.Router();
  const placeController = require("../controllers/placeController")();

  router.post("/autoSuggestPlace", placeController.getAutoSuggestion);
  router.post("/getAllStates", placeController.getState);
  router.post("/getAllCityForState", placeController.getCity);
  router.post("/searchPlace", placeController.getSearch);
  router.post("/addPlace", placeController.postAddPlace);

  return router;
};
