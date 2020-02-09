const bookController = require("../../controllers/booksController");
const router = require("express").Router();

// Matches with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

router.route("/member/:id")
.get(bookController.findByMember);


module.exports = router;
