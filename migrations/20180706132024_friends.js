//makes friend table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', function(table) {
    table.increments('id');
    table.string('name');
    table.string('address');
    table.string('city');
    table.string('state');
    table.string('phone');
    table.string('email');
    table.string('birthday');
    table.string('sex');
    table.integer('rank');
    table.string('date');
    table.string('place');
    table.string('note');
    table.string('photo');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};
