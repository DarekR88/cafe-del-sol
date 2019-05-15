const router = require("express").Router();
const appetizerController = require("../../controllers/appetizerController");

router.route("/")
    .get(appetizerController.findAll)
    .post(appetizerController.create)
    .put(appetizerController.update)

router.route("/appetizers")
    .put(appetizerController.update)
    .delete(appetizerController.remove);
    
 module.exports = router;