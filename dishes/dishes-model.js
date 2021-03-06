const knex = require('knex');
const config = require('./../knexfile');
const db = knex(config.development);

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  findDishRecipes
}; 

function find(query) {
  const { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query;
  const offset = limit * (page - 1);

  let rows = db('dishes')
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

  return rows;
}

function findById(dishId) {
  return db('dishes as d')
    .join('recipes as r', 'd.id', 'r.dish_id' )
    .select('d.id as dish_Id','d.name as Dish Type', 'r.id as recipeId',  'r.name as Recipe Name' )
    .where({ "dish_Id": dishId });
}

async function add(dish) {
  const [id] = await db('dishes').insert(cohort);

  return findById(id);
}

function remove(id) {
  return db('dishes')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('dishes')
    .where({ id })
    .update(changes, '*');
}

function findDishRecipes(dishId) {
  return db('recipes as r')
    .join('dishes', 'r.dish_id', 'dishes.id')
    .select('r.Id as id', 'r.name', 'dishes.id as dish_Id')
    .where({ "dish_Id": dishId });
}