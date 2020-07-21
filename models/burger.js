const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (val, cb) => {
        orm.insertOne("burgers", "burger_name", val, (res) => {
            cb(res);
        });
    },
    updateOne: (colVal, condition, cb) => {
        orm.updateOne("burgers", colVal, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;