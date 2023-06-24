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

function PokedexItem({pokemon}) {
    const capitalize = (word) => {
        return(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return(
        <Card sx={{ mx: 2, maxWidth: 200, my: 4}}>
            <Grid container>
                <Grid item>
                    <CardMedia component="img" height={200}
                        image={pokemon.front_image} 
                    />
                </Grid>
                <Grid item>
                    <Divider variant='middle' sx={{ width: 167 }} />
                </Grid>
                <Grid item>
                    <CardContent>
                        <Typography variant='h6'>
                            National Dex #{pokemon.national_id}
                        </Typography>
                        <Typography variant='body1' textTransform={'capitalize'}>
                            Name: {pokemon.name}
                        </Typography>
                        <Typography variant='body1'>
                            Types: {capitalize(pokemon.type1)}, {capitalize(pokemon.type2)}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
}

export default PokedexItem;