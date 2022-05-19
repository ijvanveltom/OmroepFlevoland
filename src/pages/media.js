import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from "../logo.svg"

const Media = () =>{
  return (
    <div>
      <h3>Media Archief</h3>
      <TextField id="standard-basic" label="Zoek media" variant="standard" sx={{width: '25%', marginBottom: '10px', color:'#bf2133', borderColor:'#bf2133'}}/>
      <div>
        <Box sx={{ width: '45%', marginLeft:'auto', marginRight:'auto' }} role="presentation">
          <img className='logo' alt="logo" src={logo} style={{marginTop:'25px'}}/>
          <p><small>Connecta Logo.png</small></p>
        </Box>
      </div>
    </div>
  );
}
export default Media;