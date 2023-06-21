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

function Pokedex() {
    const dispatch = useDispatch();
    const searchName = useSelector(store => store.searchPokemon);

    const updateSearch = (event) => {
        console.log('Change to search')
        dispatch({ type: 'SET_SEARCH', payload: event.target.value });
    }

    const searchPokemon = () => {
        dispatch({ type: 'SEARCH_POKEMON', payload: searchName });
    }

    return (
        <Box>
            <Card sx={{ mx: 'auto', maxWidth: 400, mt: 30}}>
                <CardContent>
                    <Typography variant='h5'>
                        Search Pokemon:
                    </Typography>
                    <TextField label="Pokemon Name" variant="outlined" sx={{ mt: 2 }} 
                        onChange={(event) => updateSearch(event)}/>
                </CardContent>
                <CardActions>
                    <Button onClick={searchPokemon}>Search</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default Pokedex;