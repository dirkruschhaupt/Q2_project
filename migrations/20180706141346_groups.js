//makes groups table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', function(table) {
    table.increments();
    table.string('group_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups');
};
