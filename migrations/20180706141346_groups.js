//makes groups table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', function(table) {
    table.integer('friends_id').references('friends.id').onDelete('CASCADE');
    table.string('groups_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups');
};
