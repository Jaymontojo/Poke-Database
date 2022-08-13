class Pokemon {
  constructor() {
    this.db = require('../../db/knex');
  };

  async findMany() {
    try {
      return await this.db('pokemon')
        .select(['id','name', 'created_at', 'updated_at'])
        .timeout(1500);
    } catch(err) {
      return err;
    };
  };

  async findOne(name) {
    try {
      return await this.db('pokemon')
        .select(['id', 'name', 'created_at', 'updated_at'])
        .where('name', name)
        .timeout(1500);
    } catch(err) {
      return err;
    };
  };

  async create(name) {
    try {
      await this.db('pokemon')
        .insert({
          name: name
        })
        .timeout(1500);
      return "Successfully created"
    } catch(err) {
      return err;
    };
  };

  async update(name, edits) {
    try {
      await this.db('pokemon')
        .where("name", name)
        .update(edits)
        .timeout(1500);
      return 'Successfully Updated!'
    } catch(err) {
      return err;
    };
  };

  async delete(name) {
    try {
      await this.db('pokemon')
        .where('name', name)
        .del()
        .timeout(1500);
        return 'Successfully Deleted!';
    } catch(err) {
      return err;
    };
  };
};

module.exports = new Pokemon();