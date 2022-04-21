exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: "cheese", quantity_id: 2 },
    { ingredient_name: "bread", quantity_id: 1 },
    { ingredient_name: "bacon", quantity_id: 5 },
    { ingredient_name: "lettuce", quantity_id: 2 },
    { ingredient_name: "tomato", quantity_id: 3 },
  ]);
};
