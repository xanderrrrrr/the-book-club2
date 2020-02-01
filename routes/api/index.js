const router = require("express").Router();
const groupRoutes = require("./groups");
const memberRoutes = require("./members");

// Book routes
router.use("/groups", groupRoutes);
router.use("/members", memberRoutes);

module.exports = router;
