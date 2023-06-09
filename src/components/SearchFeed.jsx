import { Box,  Typography } from '@mui/material'
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {

  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setvideos(data.items))
  }, [searchTerm]);

  return (
  
    <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2 }} >
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{
      color: 'white'}}  >
      Search Results for <span style={{color: '#F31503'}} >{searchTerm}</span> videos

    </Typography>
    <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
  </Box>
  )
}

export default SearchFeed