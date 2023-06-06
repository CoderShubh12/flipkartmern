
import { Box } from '@mui/material'
import Home from './components/Home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Box style={{marginTop:100}}>
      <Home/>
      </Box>

     
    </div>
  );
}

export default App;
