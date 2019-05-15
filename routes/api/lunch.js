const router = require("express").Router();
const lunchController = require("../../controllers/lunchController");

router.route("/")
    .get(lunchController.findAll)
    .post(lunchController.create)
    .put(lunchController.update);

router.route("/lunch")
    .put(lunchController.update)
    .delete(lunchController.remove);

 module.exports = router;