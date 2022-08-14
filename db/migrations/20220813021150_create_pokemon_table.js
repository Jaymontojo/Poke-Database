exports.up = async function(knex) {
  await knex.schema.createTable('pokemon', (table) => {
    table.increments('id');
    table.string('name_en', 255)
      .unique()
      .notNullable();
    table.timestamps(false, true);
  });

  await knex.raw(`
  CREATE TRIGGER update_timestamp
  BEFORE UPDATE
  ON pokemon
  FOR EACH ROW
  EXECUTE PROCEDURE update_timestamp();
`);
};

exports.down = async function(knex) {
return await knex.schema
  .dropTable('pokemon');
};