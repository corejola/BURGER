// Burgers Controller 
// Controller will handles the API Routes, "what" functionality

// Require models
var db = require("../models")

// Routes
// =============================================================
module.exports = function (app) {
    // Burgers CRUD Operations

    // For TESTING purposes - run get to show all burgers in the burgers table. 
    app.get("/api/allBurgers", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    app.get("/", function (req, res) {
        //what is dbBurger? - response from sequelize find all, provideds the information from the burgers_db as a JSON object.
        db.Burger.findAll({}).then(function (dbBurger) {
            res.render("index", { dbBurger });
            // dbBurger is the database burger object, need to send this render into handlebars
        });
    });

    // Create - post to the database
    app.post("/api/burger", function (req, res) {
        console.log(req.body)
        db.Burger.create({
            name: req.body.name,
            devoured: false
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // Update - put to update the status of burger from devoured false, to devoured true
    app.put("/api/burger/:id", function (req, res) {
        db.Burger.update({
            // name: req.body.name,
            devoured: req.body.devoured
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbBurger) {
                res.json(dbBurger);
            });
    });

    // Delete - post to the database
    app.delete("/api/burger/:id", function (req, res) {
        db.Author.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

};