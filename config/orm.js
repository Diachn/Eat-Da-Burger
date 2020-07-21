const connection = require("../config/connection.js");

var orm = {
    selectAll: (tableInput, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (tableInput, columnName, burgerName, cb) => {
        const queryString = "INSERT INTO ?? VALUES ?";
        const values = [tableInput, columnName, burgerName];

        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: (tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        const values = [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal];

        console.log(queryString);
        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;