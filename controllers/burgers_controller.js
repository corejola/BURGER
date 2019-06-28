// Burgers Controller 
// Controller will handles the API Routes, "what" functionality

// Require models
var db = require("../models")

// Routes
// =============================================================
module.exports = function (app) {
    // Burgers CRUD Operations

    // For testing purposes - run get to show all burgers in the burgers table. 
    app.get("/", function (req, res) {
        //what is dbBurger?
        db.Burger.findAll({}).then(function (dbBurger) {
            res.render("index", { dbBurger });
            console.log("dbBurger: " + JSON.stringify(dbBurger))
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
            name: req.body.name,
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