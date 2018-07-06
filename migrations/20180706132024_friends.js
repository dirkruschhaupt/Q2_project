//makes friend table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friend', function(table) {
    table.increments();
    table.string('name');
    table.string('address');
    table.integer('phone');
    table.string('email');
    table.integer('birthday');
    table.string('sex');
    table.integer('rank');
    table.string('relation');
    table.integer('date');
    table.string('place');
    table.string('note');
    table.string('photo');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friend');
};
