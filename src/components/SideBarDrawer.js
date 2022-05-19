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
  const [stateA, setStateA] = React.useState({
    left: false
  });

  const [stateB, setStateB] = React.useState({
    left: false
  });

  const [stateC, setStateC] = React.useState({
    left: false
  });

  const toggleDrawerA = (anchorA, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setStateA({ ...stateA, [anchorA]: open });
  };

  const toggleDrawerB = (anchorB, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setStateB({ ...stateB, [anchorB]: open });
  };

  const toggleDrawerC = (anchorC, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setStateC({ ...stateC, [anchorC]: open });
  };

  return (
    <div>
      {['left'].map((anchorA) => (
        <React.Fragment key={anchorA}>
            <Button onClick={toggleDrawerA(anchorA, true)} variant="text" size="large" aria-label="nieuws" sx={{width:'100%', height: '76px', color: '#bf2133',}}><Campaign/></Button>
            <Drawer variant="persistent" anchor={anchorA} open={stateA[anchorA]} onClose={toggleDrawerA(anchorA, false)} PaperProps={{sx:{height: 'calc(100% - 77px)', top: '77px',}}}>
                <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end" sx={{paddingRight: '10px'}}>
                    <Button variant="outlined" sx={{marginRight: '10px', color:'#bf2133', borderColor:'#bf2133'}} startIcon={<FilterList/>}>Sorteer Feed</Button>
                    <Button variant="outlined" sx={{color:'#bf2133', borderColor:'#bf2133'}} onClick={toggleDrawerA(anchorA, false)} onKeyDown={toggleDrawerA(anchorA, false)} startIcon={<Close/>}>Sluit Menu</Button>
                </Box>
                <Divider/>
                <Box sx={{ width: anchorA === 'top' || anchorA === 'bottom' ? 'auto' : 462 }} role="presentation">
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
      {['left'].map((anchorB) => (
        <React.Fragment key={anchorB}>
            <Button onClick={toggleDrawerB(anchorB, true)} variant="text" size="large" aria-label="planner" sx={{width:'100%', height: '76px', color: '#bf2133',}}><CalendarMonth/></Button>
            <Drawer variant="persistent" anchor={anchorB} open={stateB[anchorB]} onClose={toggleDrawerB(anchorB, false)} PaperProps={{sx:{height: 'calc(100% - 77px)', top: '77px',}}}>
                <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end" sx={{paddingRight: '10px'}}>
                    <Button variant="outlined" sx={{color:'#bf2133', borderColor:'#bf2133'}} onClick={toggleDrawerB(anchorB, false)} onKeyDown={toggleDrawerB(anchorB, false)} startIcon={<Close/>}>Sluit Menu</Button>
                </Box>
                <Divider/>
                <Box sx={{ width: anchorB === 'top' || anchorB === 'bottom' ? 'auto' : 462 }} role="presentation">
                    Planner komt hier.
                </Box>
            </Drawer>
        </React.Fragment>
      ))}
      {['left'].map((anchorC) => (
        <React.Fragment key={anchorC}>
            <Button onClick={toggleDrawerC(anchorC, true)} variant="text" size="large" aria-label="media" sx={{width:'100%', height: '76px', color: '#bf2133',}}><PermMedia/></Button>
            <Drawer variant="persistent" anchor={anchorC} open={stateC[anchorC]} onClose={toggleDrawerC(anchorC, false)} PaperProps={{sx:{height: 'calc(100% - 77px)', top: '77px',}}}>
                <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end" sx={{paddingRight: '10px'}}>
                    <Button variant="outlined" sx={{color:'#bf2133', borderColor:'#bf2133'}} onClick={toggleDrawerC(anchorC, false)} onKeyDown={toggleDrawerC(anchorC, false)} startIcon={<Close/>}>Sluit Menu</Button>
                </Box>
                <Divider/>
                <Box sx={{ width: anchorC === 'top' || anchorC === 'bottom' ? 'auto' : 462 }} role="presentation">
                    Media komt hier.
                </Box>
            </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}