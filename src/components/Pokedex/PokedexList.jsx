import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';
import PokedexItem from './PokedexItem';

function PokedexList() {
    const pokedex = useSelector(store => store.pokedex);

    return(
        <Box>
            <Grid container spacing={0}>
                {
                    pokedex.map((pokemon) => (
                        <Grid item key={pokemon.national_id}>
                            <PokedexItem 
                                pokemon = {pokemon}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default PokedexList;