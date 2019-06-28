// Burgers Controller 
// Controller will handles the API Routes, "what" functionality

// Require models
var db = require("../models")

// Routes
// =============================================================
module.exports = function (app) {
    // Burgers CRUD Operations

    // For testing purposes - run get to show all burgers in the burgers table. 
    app.get("/api/burger", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // Create - post to the database
    app.post("/api/burger", function (req, res) {
        db.Burger.create({
            name: req.body.text,
            devoured: false
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // Update - put to update the status of burger from devoured false, to devoured true
    app.put("/api/burger", function (req, res) {
        db.Burger.update({
            name: req.body.text,
            complete: req.body.complete
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