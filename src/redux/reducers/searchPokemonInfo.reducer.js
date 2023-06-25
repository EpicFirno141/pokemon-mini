const searchPokemonInfoReducer = (state = {
  dex_id: 0,
  name: '',
  front_image: '',
  back_image: '',
  type1: 0,
  type2: 0,
  base_hp: 0,
  base_attack: 0,
  base_defense: 0,
  base_sp_attack: 0,
  base_sp_defense: 0,
  base_speed: 0,
  base_experience: 0,
  growth_rate: 0,
  capture_rate: 0,
  gender_rate: 0
}, action) => {
    switch (action.type) {
      case 'SET_POKEMON_SEARCH_INFO':
        return action.payload;
      default:
        return state;
    }
  };

export default searchPokemonInfoReducer;