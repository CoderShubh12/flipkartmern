
import { Box } from '@mui/material'
import Home from './components/Home/Home';
import Header from './components/header/Header';
import { DataProvider } from './context/DataProvider';

function App() {
  return (
    <DataProvider>

    <div className="App">
      <Header/>
      <Box style={{marginTop:100}}>
      <Home/>
      </Box>

     
    </div>
    </DataProvider>
  );
}

export default App;
