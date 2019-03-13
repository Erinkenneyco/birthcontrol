const express = require("express");
const app = express();
const logRoutes = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const colors = require("colors");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");
const logger = require("morgan");
const flash = require('connect-flash');

app.use(cors());
app.use('/logs',logRoutes);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(logger("dev"));
app.use(flash())
app.use(express.static("public"));
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(config.DB, process.env.MONGODB_URI || "mongodb://localhost/reactauth", "mongodb://localhost/logs", { useNewUrlParser: true }, function(err) {
    if (err) throw err;
    console.log(`🐆  mongoose connection successful 🐆`.yellow);
    app.listen(PORT, (err)=> {
        if (err) throw err;
        console.log(`🌎  connected on port ${PORT} 🌍`.cyan)
    });
});

logRoutes.route('/').get(function(req, res) {
    log.find(function(err, logs){
        if(err) {
            console.log(err);
        } else {
            res.json(logs);
        }
    });
});



