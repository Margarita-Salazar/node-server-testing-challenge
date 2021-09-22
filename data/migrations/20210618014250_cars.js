exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments("car_id");
    table.string("name").unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
