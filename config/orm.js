// Import MySQL connection

var connection = require('../config/connection.js')

// Object for SQL calls

var orm = {

    all: function () {
        //  SQL query to select all from burgers_db

    },

    insert: function () {
        // SQL query to insert a new item into burgers_db
    },

    update: function () {
        // SQL query to change the status of the burgers to devoured
        // will switch a burger to an eaten column on the HTML (BOOLEAN T/F)
    }

};


module.exports = orm;