//makes relation table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('relation', function(table) {
    table.increments();
    table.string('relation');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('relation');
};
