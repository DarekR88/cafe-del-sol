const router = require("express").Router();
const appetizerController = require("../../controllers/appetizerController");

router.route("/")
    .get(appetizerController.findall)
    .post(appetizerController.create);

router.route("/:id")
    .put(appetizerController.update)
    .delete(appetizerController.remove);
    
 module.exports = router;