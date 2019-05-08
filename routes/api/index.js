const router = require("express").Router();

const lunchRoutes = require("./lunch")
const dinnerRoutes = require("./dinner")
const appetizerRoutes = require("./appetizers")

router.use("/lunch", lunchRoutes);
router.use("/dinner", dinnerRoutes);
router.use("/appetizers", appetizerRoutes);

module.exports = router;