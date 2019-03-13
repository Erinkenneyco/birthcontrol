const router = require("express").Router();
const logController = require("../../controllers/logController");

router.route("/")
.get(logController.findAll)
.post(logController.create);

router
.route("/:id")
.get(logController.findById)
.put(logController.update)
.delete(logController.remove);

module.exports = router;
