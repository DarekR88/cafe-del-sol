const router = require("express").Router();
const dinnerController = require("../../controllers/dinnerController");

router.route("/")
    .get(dinnerController.findAll)
    .post(dinnerController.create);

router.route("/:id")
    .put(dinnerController.update)
    .delete(dinnerController.remove);
    
 module.exports = router;