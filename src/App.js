import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Box} from '@mui/material'
import { NavBar, SearchFeed, VideoDetail, ChannelDetail, Feed } from './components';


function App() {

  return (
    // sx --> you can provide any style to matrial ui components using sx prop
    <BrowserRouter> 
    <Box sx={{backgroundColor: '#000'}}>  
      <NavBar/>
     <Routes>
        <Route exact path="/" element={<Feed/>} />
        <Route exact path="/video/:id" element={<VideoDetail/>} />    {/* /video/:12456 will direct to a specific video detail page */}
        <Route exact path="/channel/:id" element={<ChannelDetail />} />      {/* /channel/:45612 will direct to show the channel details */}
        <Route exact path="/search/:searchTerm" element={<SearchFeed />} />   

     </Routes>
    </Box>
    
    </BrowserRouter>
    
  );
}

export default App;
