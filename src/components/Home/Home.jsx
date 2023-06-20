import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

function Home(){
    return(
        <Box alignItems="center" justifyContent="center" sx={{ mx: 'auto', maxWidth: 250, mt: 20 }}>
            <Card>
                <CardActions>
                    <Stack alignItems="center" justifyContent="center" spacing={2} sx={{ mx: 'auto', py: 2 }}>
                        <Button variant='contained'>Start</Button>
                        <Button variant='contained'>Pokemon Generator</Button>
                        <Button variant='contained'>Battle Tester</Button>
                    </Stack>
                </CardActions>
            </Card>
        </Box>
    );
}

export default Home;