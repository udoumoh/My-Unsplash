import React, {useState} from 'react'
import {
    Box
} from '@chakra-ui/react';
import WithSubnavigation from '../components/Navbar'
import '../styles.css'
import MansoryGallery from '../components/MansoryGallery'

const AppContainer = () => {
    const [imageData, setImageData] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const fetchImageData = (data) => {
        setImageData({imageLink: data.imageUrl, label: data.label})
    }

    const fetchSeachValue = (searchPrompt) => {
        setSearchValue(searchPrompt)
    }
  return (
      <Box className='custom-container'>
          <WithSubnavigation handleImageDataPass={fetchImageData} handleSearchDataPass={fetchSeachValue}/>
          <MansoryGallery finalImageData={imageData} searchPrompt={searchValue}/>
      </Box>
  )
}

export default AppContainer