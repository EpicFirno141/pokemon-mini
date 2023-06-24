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
import { useDispatch } from 'react-redux';

function PokedexSearchEntry({searchPokemonInfo}) {
    const dispatch = useDispatch();

    const addPokedex = () => {
        dispatch({ type: 'ADD_TO_POKEDEX', payload: searchPokemonInfo});
    }

    const convertTypes = (type) => {
        if(type === 2){
            return('Grass');
        } else if(type === 3){
            return('Fire');
        } else if(type === 4){
            return('Water');
        } else if(type === 5){
            return('Electric');
        } else if(type === 6){
            return('Bug');
        } else if(type === 7){
            return('Normal');
        } else if(type === 8){
            return('Fighting');
        } else if(type === 9){
            return('Flying');
        } else if(type === 10){
            return('Rock');
        } else if(type === 11){
            return('Ground');
        } else if(type === 12){
            return('Poison');
        } else if(type === 13){
            return('Psychic');
        } else if(type === 14){
            return('Ghost');
        } else if(type === 15){
            return('Dark');
        } else if(type === 16){
            return('Fairy');
        } else if(type === 17){
            return('Steel');
        } else if(type === 18){
            return('Ice');
        } else if(type === 19){
            return('Dragon');
        } else if(type === 1){
            return('None');
        }
    }
    return(
        <Box>
            <Card sx={{ mx: 'auto', maxWidth: 400, mt: 10}}>
                <Grid container>
                    <Grid item>
                        <CardMedia component="img" height={200}
                            image={searchPokemonInfo.front_image} 
                        />
                    </Grid>
                    <Divider orientation='vertical' variant='middle' flexItem />
                    <Grid item>
                        <CardContent>
                            <Typography variant='h6'>
                                National Dex #{searchPokemonInfo.dex_id}
                            </Typography>
                            <Typography variant='body1' textTransform={'capitalize'}>
                                Name: {searchPokemonInfo.name}
                            </Typography>
                            <Typography variant='body1'>
                                Types: {convertTypes(searchPokemonInfo.type1)}, {convertTypes(searchPokemonInfo.type2)}
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', mt: 5}}>
                                <Button variant='contained' onClick={addPokedex}>Add</Button>
                            </Box>
                        </CardContent>
                    </Grid>
                </Grid>
                
            </Card>
        </Box>
    );
}

export default PokedexSearchEntry;