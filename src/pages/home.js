import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import "../styles/home.css";

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <h3 className='titel'>Home</h3>
                <div className='bttn'>
                    <Link to='/stories'>
                        <button>Stories</button>
                    </Link>
                    <Link to='/draaiboeken'>
                        <button>Draaiboeken</button>
                    </Link>
                    <Link to='/media'>
                        <button>Media</button>
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