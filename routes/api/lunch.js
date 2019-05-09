const router = require("express").Router();
const lunchController = require("../../controllers/lunchController");

router.route("/")
    .get(lunchController.findall)
    .post(lunchController.create);

 module.exports = router;