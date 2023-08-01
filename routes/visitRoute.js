module.exports = function () {
  const express = require("express");
  const router = express.Router();
  const visitController = require("../controllers/visitController")();

  router.get("/getVisitByName", visitController.getVisitByName);
  router.get("/getVisitByPlace", visitController.getVisitByPlace);
  router.post("/addVisit", visitController.postAddVisit);

  return router;
};
