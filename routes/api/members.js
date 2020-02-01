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
  .put(memberController.update)
  .delete(memberController.remove);


module.exports = router;
