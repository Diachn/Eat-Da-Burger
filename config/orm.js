const connection = require("../config/connection.js");

var orm = {
    selectAll: (tableInput, cb) => {
        const queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    insertOne: (table, newRowData, cb) => {
        const queryString = "INSERT INTO ?? SET ? ";
        const values = [table, newRowData];
        connection.query(queryString, values, (err, res) => {
            if (err) {
                throw err
            }
            cb(res);
        });
    },

    updateOne: (table, updateValues, condition, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ?"
        const values = [table, updateValues, condition];
        connection.query(queryString, values, (err, res) => {
            if (err) {
                throw err
            }
            cb(res);
        });
    },


};

module.exports = orm;