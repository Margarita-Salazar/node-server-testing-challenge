const db = require("../data/db-config");

function find() {
    return db("cars");
}

function findById(id) {
    return db("cars")
        .where("car_id", id)
        .first();
}

function insert(car) {
    return db("cars")
        .insert(car)
        .then(([id]) => {
            return findById(id)
        })
}

function remove(id) {
    return db('cars')
        .where('car_id', id)
        .del()
}

async function update(id, car) {
    await db('cars')
        .where('car_id', id)
        .update(car)
    return findById(id)
}

module.exports = {
    find,
    findById,
    insert,
    remove,
    update,
};
