import React, {useState} from 'react'
import {
    Box
} from '@chakra-ui/react';
import WithSubnavigation from '../components/Navbar'
import '../styles.css'
import MansoryGallery from '../components/MansoryGallery'

const AppContainer = () => {
    const[imageData, setImageData] = useState([])

    const fetchImageData = (data) => {
        setImageData({image: data.imageUrl, label: data.label})
    }
    // console.log(imageData)
  return (
      <Box className='custom-container'>
          <WithSubnavigation handleDataPass={fetchImageData} />
          <MansoryGallery finalImageData={imageData}/>
      </Box>
  )
}

export default AppContainer