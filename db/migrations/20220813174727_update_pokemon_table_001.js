exports.up = function(knex) {
  return knex.schema.alterTable('pokemon', table => {
    table.integer('entry_no')
      .notNullable();
    table.text('category');
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('pokemon', table => {
    table.dropColumn('entry_no');
    table.dropColumn('category');
  })
};