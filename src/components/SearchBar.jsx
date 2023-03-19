import React from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

const SearchBar = () => {
   
  const [searchTerm, setsearchTerm] = useState('')
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
      e.preventDefault();                      // To avoid reloading of page after submitting form we use e.preventDefault()

      if(searchTerm){
        navigate(`/search/${searchTerm}`);
        setsearchTerm('');
      }
  }

  return (
    // Paper is a nothing but a div with white background and it takes some parameters as input
    <Paper
    component='form'
    onSubmit={onhandleSubmit}
    sx={{
        borderRadius:20,
        border: '1px solid #e3e3e3',
        boxShadow: 'none' ,
        pl: 2,              // padding left
        mr: {sm: 5}        // right-margin = 5 for smaller devices // you can provide specific styles for specific devices
    }} >
        <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{ p:'12px', color:'purple'}}>
            <Search/>
        </IconButton>
      

    </Paper>


  )
}

export default SearchBar