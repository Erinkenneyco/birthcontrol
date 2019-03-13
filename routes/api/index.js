const path = require("path");
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const logRoutes = require("./logs");

router.use("/users", userRoutes);

router.use("/logs", logRoutes);

router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
