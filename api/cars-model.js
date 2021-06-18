const db = require("../data/db-config");

function find() {
    return db("cars");
}

function findById(id) {
    return db("cars")
        .where("car_id", id)
        .first();
}

module.exports = {
    find,
    findById,
};
