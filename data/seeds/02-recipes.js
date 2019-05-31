exports.seed = async function(knex) {
  
  // Inserts seed entries
  await knex('recipes').insert([
    {id: 1, name: 'Brussels Sprouts Pizza', dish_id: 1},
    {id: 2, name: 'Touchdown Pizza', dish_id: 1},
    {id: 3, name: 'Best Ever Lemon Drizzle Cake', dish_id: 3 },
    {id: 4, name: 'Burnt Basque Cheesecake', dish_id: 3 },
    {id: 5, name: 'Spaghetti Cacio e Pepe', dish_id: 2 },
    {id: 6, name: 'Baked Ziti Casserole', dish_id: 2 },
  ]);
};

