import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="App">
        <Toolbar position="absolute" sx={{height: '7vh', overflow: 'hidden',}}>
          <h1>Dashboard </h1>
        </Toolbar>
        <Box sx={{width:'100%', height: '93vh', overflow: 'hidden', display: 'flex',}}>
          <Box sx={{width:'4%', height: '100%', overflow: 'auto', backgroundColor: 'primary.light'}}>
          </Box>
          <Box sx={{width:'20%', height: '100%', overflow: 'auto',}}>
            <Button variant="contained">Hello World</Button>
          </Box>
          <Box sx={{width:'76%', height: '100%', overflow: 'hidden',}}>
            <Box sx={{width:'100%', height: '30%', overflow: 'auto', backgroundColor: 'secondary.light'}}>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', width:'100%', height: '70%', overflow: 'hidden',}}>
              <Box sx={{display: 'flex', width:'50%', height: '100%', overflow: 'auto', backgroundColor: 'primary.dark'}}>
                  <TextArea></TextArea>
              </Box>
              <Box sx={{display: 'flex', width:'50%', height: '100%', overflow: 'auto', backgroundColor: 'secondary.dark'}}>
              </Box>
            </Box>
          </Box>
        </Box>
    </div>
  );
}

export default App;
