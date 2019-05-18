const router = require("express").Router();

const lunchRoutes = require("./lunch")
const dinnerRoutes = require("./dinner")
const appetizerRoutes = require("./appetizers")
const colorsRoutes = require("./colors")

router.use("/lunch", lunchRoutes);
router.use("/dinner", dinnerRoutes);
router.use("/appetizers", appetizerRoutes);
router.use("/colors", colorsRoutes)

module.exports = router;