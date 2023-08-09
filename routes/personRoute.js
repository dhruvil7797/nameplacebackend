module.exports = function () {
  const express = require("express");
  const router = express.Router();
  const personController = require("../controllers/personController")();

  router.post("/autoSuggestPerson", personController.getAutoSuggestion);
  router.post("/getAllSampradaya", personController.getSampradaya);
  router.post("/searchPerson", personController.getSearch);
  router.post("/getGuruList", personController.getGuruList);
  router.post("/addPerson", personController.postAddPerson);

  return router;
};
