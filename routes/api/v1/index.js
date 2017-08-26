const express = require("express");
const usersController = require("../../../controllers/api/users");
const router = express.Router();

router.use("/users", usersController);

module.exports = router;
