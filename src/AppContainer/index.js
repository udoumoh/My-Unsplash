import React from 'react'
import {
    Box
} from '@chakra-ui/react';
import WithSubnavigation from '../components/Navbar'
import '../styles.css'
import MansoryGallery from '../components/Navbar/MansoryGallery';

const AppContainer = () => {
  return (
      <Box className='custom-container'>
          <WithSubnavigation />
          <MansoryGallery />
      </Box>
  )
}

export default AppContainer