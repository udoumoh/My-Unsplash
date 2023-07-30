import React from 'react'
import {
    Box,
    Image,
} from '@chakra-ui/react'
import  img1 from '../../../images/gal1.jpg'
import img2 from '../../../images/gal2.jpg'
import img3 from '../../../images/gal3.jpg'
import img4 from '../../../images/gal4.jpg'
import img5 from '../../../images/gal5.jpg'
import img6 from '../../../images/gal6.jpg'
import img7 from '../../../images/gal7.jpg'


const MansoryGallery = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7]
  return (
      <Box
      padding={4}
      width={'100%'}
      sx={{ columnCount:[1,2,3], columnGap:'32px'}}
      >
        {images.map((image, i) => {
          return(
            <Image 
            key={i}  
            src={image}
            display={'inline-block'}
            w='100%'
            borderRadius={'xl'}
            mb={8}
            />
          )
        })}
      </Box>
  )
}

export default MansoryGallery