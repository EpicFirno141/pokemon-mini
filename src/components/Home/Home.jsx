import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Home(){
    const history = useHistory();

    const goPokedex = () => {
        history.push('/pokedex');
    }

    const goBattle = () => {
        history.push('/battle')
    }

    return(
        <Box alignItems="center" justifyContent="center" sx={{ mx: 'auto', maxWidth: 250, mt: 20 }}>
            <Card>
                <CardActions>
                    <Stack alignItems="center" justifyContent="center" spacing={2} sx={{ mx: 'auto', py: 2 }}>
                        <Button variant='contained'>Start</Button>
                        <Button variant='contained' onClick={goPokedex}>Pokedex</Button>
                        <Button variant='contained' onClick={goBattle}>Battle Tester</Button>
                    </Stack>
                </CardActions>
            </Card>
        </Box>
    );
}

export default Home;