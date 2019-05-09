const router = require("express").Router();
const dinnerController = require("../../controllers/dinnerController");

router.route("/")
    .get(dinnerController.findall)
    .post(dinnerController.create);
    
 module.exports = router;