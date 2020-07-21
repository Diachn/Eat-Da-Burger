const connection = require("../config/connection.js");

var orm = {
    // Display all burgers in the db.
    selectAll: (table, cb) => {
        const queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // Add a burger to the db.
    insertOne: (table, cols, vals, cb) => {
        const queryString = "INSERT INTO " + table + '(' + cols + ') VALUES ("' + vals + '");'

        connection.query(queryString, (err, res) => {
            if (err) {
                throw err
            }
            cb(res);
        });
    },
    // Set burger devoured status to true.
    updateOne: (table, objColVals, condition, cb) => {
        const queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition + ";"

        connection.query(queryString, (err, res) => {
            if (err) {
                throw err
            }
            cb(res);
        });
    },


};

// Export the ORM object in module.exports.
module.exports = orm;
// var orm = {
//     selectAll: (tableInput, cb) => {
//         const queryString = "SELECT * FROM ??";
//         connection.query(queryString, [tableInput], (err, ) => {
//             if (err) {
//                 throw err;
//             }
//             cb();
//         });
//     },
//     insertOne: (tableInput, columnName, burgerName, cb) => {
//         const queryString = "INSERT INTO ?? (??) VALUES (?)";
//         const values = [tableInput, columnName, burgerName];

//         connection.query(queryString, values, (err, ) => {
//             if (err) {
//                 throw err;
//             }
//             cb();
//         });
//     },

//     updateOne: (tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) => {
//         const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
//         const values = [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal];

//         console.log(queryString);
//         connection.query(queryString, values, (err, ) => {
//             if (err) {
//                 throw err;
//             }
//             cb();
//         });
//     },
// };

// module.exports = orm;