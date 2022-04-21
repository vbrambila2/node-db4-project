exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.text('recipe_name')
            .unique()
            .notNullable();
    })
    .createTable('quantity', tbl => {
        tbl.increments('quantity_id');
        tbl.integer('quantity')
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.text('ingredient_name')
            .unique()
            .notNullable();
        tbl.integer('quantity_id')
            .unsigned()
            .notNullable()
            .references('quantity_id')
            .inTable('quantity')
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_number')
            .notNullable();
        tbl.text('instructions')
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
    })
};

exports.down = function(knex) {
    return knex.schema  
        .dropTableIfExists('recipes')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('quantity')
};