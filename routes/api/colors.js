const router = require("express").Router();
const colorsController = require("../../controllers/colorsController");

router.route("/")
    .get(colorsController.findAll)
    .put(colorsController.update)

router.route("/colors")
    .delete(colorsController.remove)
    
 module.exports = router;