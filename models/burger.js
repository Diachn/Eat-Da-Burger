const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (newBurger, cb) => {
        orm.insertOne("burgers", newBurger, (res) => {
            cb(res);
        });
    },
    updateOne: (burgerData, condition, cb) => {
        orm.updateOne("burgers", burgerData, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;