import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Campaign from '@mui/icons-material/Campaign';
import FilterList from '@mui/icons-material/FilterList';

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
                <h3 className='titel'>Binnenkomend Nieuws</h3>
                <Button variant="outlined" sx={{marginRight: '10px', color:'#bf2133', borderColor:'#bf2133'}} startIcon={<FilterList/>}>Sorteer Feed</Button>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Campaign />
                            </ListItemIcon>
                            <ListItemText primary="ANP: Man valt van boot Heusden" secondary="Om 11:30 is er een man van een boot gevallen in de omgeving van Heusden..."/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Campaign />
                            </ListItemIcon>
                            <ListItemText primary="ANP: Maxima op staatsbezoek Malta" secondary="Deze ochtend bezoekt Konigin Maxima het staatshoofd van Malta..."/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Campaign />
                            </ListItemIcon>
                            <ListItemText primary="ANP: Legodozen overal uitverkocht" secondary="Lego kan de vraag naar nieuwe dozen niet bijhouden..."/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}
export default Home;