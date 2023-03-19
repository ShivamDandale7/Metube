import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = ({selectedCategory,setselectedCategory}) => {
   
  return (
  <Stack
  direction="row"
  sx={{
    overflowY: 'auto',
    height: {sx: 'auto', md:'95%' },
    flexDirection: {md:'column'},
  }}
  >
    {categories.map((category) => (
      <button className='category-btn'
      onClick={() => setselectedCategory(category.name)} 
      style={{background: category.name === setselectedCategory && '#FC1503',
      color: 'white'
      }} >
        <span style={{color: category.name === setselectedCategory? 'white': 'red', marginRight:'13px' }} > {category.icon} </span>
        <span style={{opacity: category.name === setselectedCategory? '1': '0.8'}}> {category.name} </span>
      </button>
    ))}


  </Stack>   
  
  )
}

export default SideBar