import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import PokedexSearchEntry from './PokedexSearchEntry';
import { useState } from 'react';

function Pokedex() {
    const dispatch = useDispatch();
    const searchName = useSelector(store => store.searchPokemon);
    const searchPokemonInfo = useSelector(store => store.searchPokemonInfo);
    const [searchState, setSearchState] = useState(false);

    const updateSearch = (event) => {
        console.log('Change to search')
        dispatch({ type: 'SET_SEARCH', payload: event.target.value });
    }

    const searchPokemon = () => {
        dispatch({ type: 'SEARCH_POKEMON', payload: searchName });
        if(searchState === false){
            setSearchState(true);
        }
    }

    return (
        <Box>
            <Stack>
                {
                    searchState ?  <PokedexSearchEntry
                        searchPokemonInfo = {searchPokemonInfo}
                        /> : 
                    <Card sx={{ mx: 'auto', mt: 10, maxWidth: 400}}>
                        <CardContent>
                            <Typography>Search a pokemon below</Typography>
                        </CardContent>
                    </Card>
                }
                <Card sx={{ mx: 'auto', maxWidth: 400, mt: 10}}>
                    <CardContent>
                        <Typography variant='h5'>
                            Search Pokemon
                        </Typography>
                        <TextField label="Pokemon Name" variant="outlined" sx={{ mt: 2 }} 
                            onChange={(event) => updateSearch(event)}/>
                    </CardContent>
                    <CardActions sx={{ mb: 1 }}>
                        <Button variant='contained' onClick={searchPokemon} sx={{ mx: 'auto' }}>Search</Button>
                    </CardActions>
                </Card>
            </Stack>
        </Box>
    );
}

export default Pokedex;