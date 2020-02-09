const router = require("express").Router();
const groupRoutes = require("./groups");
const memberRoutes = require("./members");
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes)
router.use("/groups", groupRoutes);
router.use("/members", memberRoutes);

module.exports = router;
