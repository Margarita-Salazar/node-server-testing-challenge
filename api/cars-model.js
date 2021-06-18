const db = require("../data/db-config");

function find() {
  return db("cars");
}

module.exports = {
  find,
};
