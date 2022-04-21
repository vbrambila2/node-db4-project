const express = require('express');
const Model = require('./model');

const router = express.Router();

router.get('/recipes', (req, res) => {
    Model.getRecipes()
        .then(rec => {
            res.json(rec)
        })
        .catch(() => {
            res.status(500).json({ message: '500 error getRecipes' })
        })
})

router.get('/recipes/:recipe_id', (req, res) => {
    Model.getRecipeById(req.params.recipe_id)
        .then(rec => {
            res.json(rec)
        })
        .catch(() => {
            res.status(500).json({ message: '500 error getRecipeById' })
        })
})

module.exports = router;