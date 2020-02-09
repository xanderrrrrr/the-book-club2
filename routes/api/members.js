const memberController = require("../../controllers/memberController");
const router = require("express").Router();

// Matches with "/api/members"
router.route("/")
  .get(memberController.findAll)
  .post(memberController.create);

// Matches with "/api/members/:id"
router
  .route("/:id")
  .get(memberController.findByGroup)
  // .get(memberController.findById)
  .put(memberController.update)
  .delete(memberController.remove);

  router.route("/member/:id")
  .get(memberController.findById)


module.exports = router;
