const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    // GET route code here
});

// POST Route to add pokemon to the pokedex table
router.post('/', (req, res) => {
    const pokemon = req.body;
    const queryText = `INSERT INTO "pokedex" 
    (national_id, name, front_image, back_image, type1, type2, base_hp, base_attack, base_defense, base_sp_attack, base_sp_defense, base_speed, base_experience, growth_rate_id, capture_rate) 
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;
    pool.query(queryText, [pokemon.national_id, pokemon.name, pokemon.front_image, pokemon.back_image, pokemon.type1, pokemon.type2, pokemon.base_hp, pokemon.base_attack, pokemon.base_defense, pokemon.base_sp_attack, pokemon.base_sp_defense, pokemon.base_speed, pokemon.base_experience, pokemon.growth_rate, pokemon.capture_rate]).then((response) => {
        res.send(response.rows);
    }).catch((err) => {
        console.log('POST to pokedex table failed: ', err);
        res.sendStatus(500);
    });
});

module.exports = router;