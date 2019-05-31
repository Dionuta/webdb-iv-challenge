
exports.seed = async function(knex) {
  
      // Inserts seed entries
      await knex('dishes').insert([
        {id: 1, name: 'Pizzas'},
        {id: 2, name: 'Pastas'},
        {id: 3, name: 'Cakes'}
      ]);
};
