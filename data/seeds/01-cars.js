exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      return knex("cars").insert([
        { name: "Sonic" },
        { name: "Malibou" },
        { name: "Camaro" },
      ]);
    });
};
