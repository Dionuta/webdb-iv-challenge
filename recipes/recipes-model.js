const knex = require('knex');
const config = require('./../knexfile');
const db = knex(config.development);

module.exports = {
  find,
  findById,
  add,
  remove,
  update
}; 

function find(query) {
  const { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query;
  const offset = limit * (page - 1);

  let rows = db('recipes')
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

  return rows;
}

function findById(id) {
  return db('recipes')
    .where({ id })
    .first();
}

async function add(recipe) {
  const [id] = await db('recipes').insert(cohort);

  return findById(id);
}

function remove(id) {
  return db('recipes')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('recipes')
    .where({ id })
    .update(changes, '*');
}
