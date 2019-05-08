const router = require("express").Router();
const appetizerController = require("../../controllers/appetizerController");

router.route("/")
    .get(appetizerController.findall)
    .post(appetizerController.create);
    
 module.exports = router;