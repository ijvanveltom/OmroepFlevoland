import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Campaign from '@mui/icons-material/Campaign';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import PermMedia from '@mui/icons-material/PermMedia';
import Close from '@mui/icons-material/Close';
import FilterList from '@mui/icons-material/FilterList';

export default function SideBarDrawer() {
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} variant="text" size="large" aria-label="nieuws" sx={{width:'100%', height: '76px', color: 'primary.main',}}><Campaign/></Button>
            <Button variant="text" size="large" aria-label="planner" sx={{width:'100%', height: '76px', color: 'primary.main',}}><CalendarMonth/></Button>
            <Button variant="text" size="large" aria-label="media" sx={{width:'100%', height: '76px', color: 'primary.main',}}><PermMedia/></Button>

            <Drawer variant="persistent" anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} PaperProps={{sx:{height: 'calc(100% - 67px)', top: '67px',}}}>
                <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end" sx={{paddingRight: '10px'}}>
                    <Button variant="outlined" sx={{marginRight: '10px'}} startIcon={<FilterList/>}>Sorteer Feed</Button>
                    <Button variant="outlined" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} startIcon={<Close/>}>Sluit Menu</Button>
                </Box>
                <Divider/>
                <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 462 }} role="presentation">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Campaign />
                                </ListItemIcon>
                                <ListItemText primary="Man valt van boot Heusden" secondary="Om 11:30 is er een man van een boot gevallen in de omgeving van Heusden..."/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Campaign />
                                </ListItemIcon>
                                <ListItemText primary="Maxima op staatsbezoek Malta" secondary="Deze ochtend bezoekt Konigin Maxima het staatshoofd van Malta..."/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}