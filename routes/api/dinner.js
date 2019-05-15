const router = require("express").Router();
const dinnerController = require("../../controllers/dinnerController");

router.route("/")
    .get(dinnerController.findAll)
    .post(dinnerController.create)
    .put(dinnerController.update)

router.route("/dinner")
    .put(dinnerController.update)
    .delete(dinnerController.remove);
    
 module.exports = router;