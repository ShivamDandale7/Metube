import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useState, useEffect } from 'react'


const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setvideos(data.items))
  }, [selectedCategory])

  return (
    <Stack  
    sx = {{flexDirection: {sx:"column", md:"row"} }}
    >
      <Box sx={{height: {sx: 'auto' , md:'92vh'}, borderRight:'1px solid #3d3d3d', px: {sm:0, md: 2} }} >
          <SideBar 
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}/>

      <Typography className='copyright' variant="body2" sx={{ mt: 1.5, color: '#fff' }} >   
      {/* Typography is used for nice headings, paragraph, body elements */}
      Copyright 2020 by TubeYou
      </Typography>

      </Box>

      <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2 }} >
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{
          color: 'white'}}  >
          {selectedCategory} <span style={{color: '#F31503'}} >Videos</span>

        </Typography>

        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed