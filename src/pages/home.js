import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import "../styles/home.css";

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <h3 className='titel'>Home</h3>
                <div className='bttn'>
                    <Link to='/stories'>
                        <Button variant="contained" size="large" sx={{width:'90%', marginBottom:'25px', color:'white', backgroundColor:'#bf2133'}}>Stories</Button>
                    </Link>
                    <Link to='/draaiboeken'>
                        <Button variant="contained" size="large" sx={{width:'90%', marginBottom:'25px', color:'white', backgroundColor:'#bf2133'}}>Draaiboeken</Button>
                    </Link>
                    <Link to='/media'>
                        <Button variant="contained" size="large" sx={{width:'90%', color:'white', backgroundColor:'#bf2133'}}>Media</Button>
                    </Link>
                </div>
            </Grid>
            <Grid item xs={6}>
                <h3 className='titel'>Andere informatie</h3>
            </Grid>
        </Grid>
    );
}
export default Home;