const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET request that sends back ALL pokedex entries
router.get('/', (req, res) => {
    const queryText = `SELECT pokedex.national_id, pokedex.name, pokedex.front_image, pokedex.back_image, 
    t1."type" AS type1, t2."type" AS type2, pokedex.base_hp, pokedex.base_attack,
    pokedex.base_defense, pokedex.base_sp_attack, pokedex.base_sp_defense, pokedex.base_speed, 
    pokedex.base_experience, growth_rate.rate, pokedex.capture_rate 
    FROM pokedex JOIN growth_rate ON pokedex.growth_rate_id = growth_rate.id 
    JOIN "types" t1 ON pokedex.type1 = t1.id 
    JOIN "types" t2 ON pokedex.type2 = t2.id 
    ORDER BY pokedex.national_id ASC;`;

    pool.query(queryText).then((response) => {
        res.send(response.rows);
    }).catch((err) => {
        console.log('POST to pokedex table failed: ', err);
        res.sendStatus(500);
    });
});

// POST Route to add pokemon to the pokedex table
router.post('/', (req, res) => {
    const pokemon = req.body;
    const queryText = `INSERT INTO "pokedex" 
    (national_id, name, front_image, back_image, type1, type2, base_hp, base_attack, base_defense, base_sp_attack, base_sp_defense, base_speed, base_experience, growth_rate_id, capture_rate) 
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;
    pool.query(queryText, [pokemon.dex_id, pokemon.name, pokemon.front_image, pokemon.back_image, pokemon.type1, pokemon.type2, pokemon.base_hp, pokemon.base_attack, pokemon.base_defense, pokemon.base_sp_attack, pokemon.base_sp_defense, pokemon.base_speed, pokemon.base_experience, pokemon.growth_rate, pokemon.capture_rate]).then((response) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('POST to pokedex table failed: ', err);
        res.sendStatus(500);
    });
});

module.exports = router;