const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");
const buildingController = require("../controllers/buildingController");

const router = express.Router();

// Building routes
router.route("/building/create").post(catchErrors(buildingController.create))

module.exports = router
