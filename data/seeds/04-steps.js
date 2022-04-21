exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: 1, instructions: 'add cheese', recipe_id: 1, ingredient_id: 1},
    {step_number: 2, instructions: 'melt cheese on bread', recipe_id: 1, ingredient_id: 2},
    {step_number: 1, instructions: 'add bacon', recipe_id: 2, ingredient_id: 3},
    {step_number: 2, instructions: 'add lettuce', recipe_id: 2, ingredient_id: 4},
    {step_number: 3, instructions: 'add tomato', recipe_id: 2, ingredient_id: 5} ,
  ]);
};
