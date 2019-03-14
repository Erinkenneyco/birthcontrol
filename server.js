const express = require("express");
const app = express();
const logRoutes = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
let Log = require('./models/log')
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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:127.0.0.1/reactauth", { useNewUrlParser: true }, function(err) {
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

logRoutes.route('/:id').get(function(req, res) {
let id = req.params.id;
Log.findById(id, function(err, log) {
    res.json(log);
    });
});

logRoutes.route('/add').post(function(req, res){
    let log = new Log(req.body);
    log.save()
    .then(log =>{
        res.status(200).json({'log': 'log added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new log failed');
    });
});

logRoutes.route('/update/:id').post(function(req, res) {
    Log.findById(req.params.id, function(err, log) {
        if(!log)
        res.status(404).send("data is not found");
        else
        log.log_temp = req.body.log_temp;
        log.log_weight = req.body.log_weight;
        log.log_sleep = req.body.log_sleep;
        log.log_spotting = req.body.log_spotting;
        log.log_hungover = req.body.log_hungover;
        log.log_bc = req.body.log_bc;
        log.log_symptoms = req.body.log_symptoms;

        log.save().then(log => {
            res.json('Log updated!');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });

        
    });
});



