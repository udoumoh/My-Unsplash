import React from 'react'
import {
    Box,
    Image,
    Button,
} from '@chakra-ui/react'
import img1 from '../../../images/gal1.jpg'
import img2 from '../../../images/gal2.jpg'
import img3 from '../../../images/gal3.jpg'
import img4 from '../../../images/gal4.jpg'
import img5 from '../../../images/gal5.jpg'
import img6 from '../../../images/gal6.jpg'
import img7 from '../../../images/gal7.jpg'


const MansoryGallery = () => {
    const images = [
      { 'image': img1, 'label': 'random' },
      { 'image': img2, 'label': 'random' },
      { 'image': img3, 'label': 'random' }, 
      { 'image': img4, 'label': 'random' },
      { 'image': img5, 'label': 'random' },
      { 'image': img6, 'label': 'random' },
      { 'image': img7, 'label': 'random' }, 
    ]
  return (
      <Box
      padding={4}
      width={'100%'}
      sx={{ columnCount:[1,2,3], columnGap:'32px'}}
      >
        <Button>Delete</Button>
        {images.map((image, i) => {
          return(
            <Image 
            key={i}  
            src={image.image}
            display={'inline-block'}
            w='100%'
            borderRadius={'3xl'}
            mb={8}
            />
          )
        })}
      </Box>
  )
}

export default MansoryGallery