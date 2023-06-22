import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function PokedexSearchEntry({searchPokemonInfo}) {
    return(
        <Box>
            <Card sx={{ mx: 'auto', maxWidth: 200, mt: 10}}>
                <CardMedia component="img"
                    image={searchPokemonInfo.image} />
            </Card>
        </Box>
    );
}

export default PokedexSearchEntry;