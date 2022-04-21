const db = require('../data/db-config');

function getRecipes() {
    return db('recipes');
}

async function getRecipeById(recipe_id) {
    let results =  await db('recipes')
        .leftJoin('steps', 'recipes.recipe_id', 'steps.recipe_id')
        .leftJoin('ingredients', 'ingredients.ingredient_id', 'steps.ingredient_id')
        .leftJoin('quantity', 'quantity.quantity_id', 'ingredients.quantity_id')
        .select('recipes.recipe_id', 'recipes.recipe_name', 'steps.*', 'ingredients.*', 'quantity.*')
        .orderBy('steps.step_number')
        .where({ 
            'recipes.recipe_id': recipe_id
        })

    if(results.length === 0) {
        return null
    }

    const recipe = {
        recipe_id: results[0].recipe_id,
        recipe_name: results[0].recipe_name,
        steps: []
    }

    for(let result of results) {
        if(result.contents !== null) {
            recipe.steps.push({ 
                contents: result.contents, 
                step_id: result.step_id,
                step_number: result.step_number,
                instructions: result.instructions,
                ingredients: [{
                    ingredient_id: result.ingredient_id,
                    ingredient_name: result.ingredient_name,
                    quantity: result.quantity
                }] 
            })
        }
    }

    return recipe;
}

module.exports = {
    getRecipes,
    getRecipeById
}