exports.seed = function(knex) {
  return knex('quantity').insert([
    {quantity: 1},
    {quantity: 2},
    {quantity: 3},
    {quantity: 4},
    {quantity: 5},
  ]);
};
