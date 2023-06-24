import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPokemonInfo(action) {
  try {
    const responsePokemon = yield axios.get(`https://pokeapi.co/api/v2/pokemon/${action.payload}`);
    const responseSpecies = yield axios.get(`https://pokeapi.co/api/v2/pokemon-species/${action.payload}`);

    const pokemon = responsePokemon.data;
    const species = responseSpecies.data;

    let growth;
    if(species.growth_rate.name === 'fluctuating'){
      growth = 1;
    } else if(species.growth_rate.name === 'slow'){
      growth = 2;
    } else if(species.growth_rate.name === 'medium-slow'){
      growth = 3;
    } else if(species.growth_rate.name === 'medium-fast'){
      growth = 4;
    } else if(species.growth_rate.name === 'fast'){
      growth = 5;
    } else if(species.growth_rate.name === 'erratic'){
      growth = 6;
    }

    let type1;
    let type2;
    if(pokemon.types[0].type.name === 'grass'){
      type1 = 2;
    } else if(pokemon.types[0].type.name === 'fire'){
      type1 = 3;
    } else if(pokemon.types[0].type.name === 'water'){
      type1 = 4;
    } else if(pokemon.types[0].type.name === 'electric'){
      type1 = 5;
    } else if(pokemon.types[0].type.name === 'bug'){
      type1 = 6;
    } else if(pokemon.types[0].type.name === 'normal'){
      type1 = 7;
    } else if(pokemon.types[0].type.name === 'fighting'){
      type1 = 8;
    } else if(pokemon.types[0].type.name === 'flying'){
      type1 = 9;
    } else if(pokemon.types[0].type.name === 'rock'){
      type1 = 10;
    } else if(pokemon.types[0].type.name === 'ground'){
      type1 = 11;
    } else if(pokemon.types[0].type.name === 'poison'){
      type1 = 12;
    } else if(pokemon.types[0].type.name === 'psychic'){
      type1 = 13;
    } else if(pokemon.types[0].type.name === 'ghost'){
      type1 = 14;
    } else if(pokemon.types[0].type.name === 'dark'){
      type1 = 15;
    } else if(pokemon.types[0].type.name === 'fairy'){
      type1 = 16;
    } else if(pokemon.types[0].type.name === 'steel'){
      type1 = 17;
    } else if(pokemon.types[0].type.name === 'ice'){
      type1 = 18;
    } else if(pokemon.types[0].type.name === 'dragon'){
      type1 = 19;
    }

    if(pokemon.types.length > 1){
      if(pokemon.types[1].type.name === 'grass'){
        type2 = 2;
      } else if(pokemon.types[1].type.name === 'fire'){
        type2 = 3;
      } else if(pokemon.types[1].type.name === 'water'){
        type2 = 4;
      } else if(pokemon.types[1].type.name === 'electric'){
        type2 = 5;
      } else if(pokemon.types[1].type.name === 'bug'){
        type2 = 6;
      } else if(pokemon.types[1].type.name === 'normal'){
        type2 = 7;
      } else if(pokemon.types[1].type.name === 'fighting'){
        type2 = 8;
      } else if(pokemon.types[1].type.name === 'flying'){
        type2 = 9;
      } else if(pokemon.types[1].type.name === 'rock'){
        type2 = 10;
      } else if(pokemon.types[1].type.name === 'ground'){
        type2 = 11;
      } else if(pokemon.types[1].type.name === 'poison'){
        type2 = 12;
      } else if(pokemon.types[1].type.name === 'psychic'){
        type2 = 13;
      } else if(pokemon.types[1].type.name === 'ghost'){
        type2 = 14;
      } else if(pokemon.types[1].type.name === 'dark'){
        type2 = 15;
      } else if(pokemon.types[1].type.name === 'fairy'){
        type2 = 16;
      } else if(pokemon.types[1].type.name === 'steel'){
        type2 = 17;
      } else if(pokemon.types[1].type.name === 'ice'){
        type2 = 18;
      } else if(pokemon.types[1].type.name === 'dragon'){
        type2 = 19;
      }
    } else{
      type2 = 1;
    }

    yield put({ type: 'SET_POKEMON_SEARCH_INFO', payload: {
        dex_id: pokemon.id,
        name: pokemon.name,
        front_image: pokemon.sprites.front_default,
        back_image: pokemon.sprites.back_default,
        type1: type1,
        type2: type2,
        base_hp: pokemon.stats[0].base_stat,
        base_attack: pokemon.stats[1].base_stat,
        base_defense: pokemon.stats[2].base_stat,
        base_sp_attack: pokemon.stats[3].base_stat,
        base_sp_defense: pokemon.stats[4].base_stat,
        base_speed: pokemon.stats[5].base_stat,
        base_experience: pokemon.base_experience,
        growth_rate: growth,
        capture_rate: species.capture_rate
    } });
  } catch (error) {
      console.log('PokeAPI GET request error: ', error);
  }
}

function* addSearchPokemon(action){
  try{
      yield axios.post('/api/pokedex', action.payload);

      yield put({ type: 'FETCH_POKEDEX' });
  } catch (error) {
      console.log('POST request to pokedex table error: ', error);
  }
}

function* searchPokemonSaga() {
  yield takeLatest('SEARCH_POKEMON', fetchPokemonInfo);
  yield takeLatest('ADD_TO_POKEDEX', addSearchPokemon);
}

export default searchPokemonSaga;