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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function PokedexSearchEntry({searchPokemonInfo}) {

    const listTypes = (types) => {
        let fullList = `${capitalize(types[0].type.name)}`;
        for(let i = 1; i < types.length; i++){
            fullList += `, ${capitalize(types[i].type.name)}`;
        }
        return(fullList);
    }

    const capitalize = (word) => {
        return(word.charAt(0).toUpperCase() + word.slice(1))
    }

    return(
        <Box>
            <Card sx={{ mx: 'auto', maxWidth: 400, mt: 10}}>
                <Grid container>
                    <Grid item>
                        <CardMedia component="img" height={200}
                            image={searchPokemonInfo.image} 
                        />
                    </Grid>
                    <Divider orientation='vertical' variant='middle' flexItem />
                    <Grid>
                        <CardContent>
                            <Typography variant='h6'>
                                National Dex #{searchPokemonInfo.dex_id}
                            </Typography>
                            <Typography variant='body1' textTransform={'capitalize'}>
                                Name: {searchPokemonInfo.name}
                            </Typography>
                            <Typography variant='body1'>
                                Types: {listTypes(searchPokemonInfo.types)}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                
            </Card>
        </Box>
    );
}

export default PokedexSearchEntry;