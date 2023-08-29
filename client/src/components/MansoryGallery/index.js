import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Button,
  Grid,
} from '@chakra-ui/react';
import img1 from '../../images/gal1.jpg';
import img2 from '../../images/gal2.jpg';
import img3 from '../../images/gal3.jpg';
import img4 from '../../images/gal4.jpg';
import img5 from '../../images/gal5.jpg';
import img6 from '../../images/gal6.jpg';
import img7 from '../../images/gal7.jpg';

const MansoryGallery = ({finalImageData, searchPrompt}) => {
  const [imageData, setImageData] = useState([
    { imageLink: img1, label: 'The quick brown fox' },
    { imageLink: img2, label: 'random' },
    { imageLink: img3, label: 'random' },
    { imageLink: img4, label: 'random' },
    { imageLink: img5, label: 'random' },
    { imageLink: img6, label: 'random' },
    { imageLink: img7, label: 'random' },])

  const handleNewData = () => {
    setImageData([...imageData, finalImageData])
  }
  
  const handleDelete = (data) => {
    let newImageData = imageData.filter((image) => image.imageLink !== data.imageLink)
    setImageData(newImageData)
  }
  useEffect(() => {
    if(finalImageData.imageLink && finalImageData.label){
      handleNewData();
    }
  }, [finalImageData]);

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <>
      <Box
        padding={4}
        mt={10}
        width={'100%'}
        sx={{ columnCount: [1,2,3], columnGap: '32px' }}
        position={'relative'}
      >
        {imageData.map((image, i) => {
          return (
            <Box
              key={i}
              display="inline-block"
              width="100%"
              borderRadius="3xl"
              mb={8}
              position="relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <Image
                key={i}
                src={image.imageLink}
                display={'inline-block'}
                width="100%"
                height="100%"
                borderRadius={'3xl'}
                objectFit={'cover'}
              />
              {hoveredIndex === i && (
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width="100%"
                  height="100%"
                  display="flex"
                  backgroundColor="rgba(0, 0, 0, 0.5)"
                  borderRadius="3xl"
                >
                  <Grid alignContent={'space-between'} m={6} width={'100%'}>
                    <Button 
                    variant="outline" 
                    colorScheme="red" 
                    marginRight={2} 
                    borderRadius={24} 
                    px={8} 
                    justifySelf={'end'} 
                    _hover={{ bg: '#c23616', color: '#fff', border:'#c23616'}}
                    onClick={()=>{handleDelete(image)}}
                    >
                    delete
                  </Button>
                  <Box color="white" fontSize="xl" fontWeight={'bold'}>
                    {image.label}
                  </Box>
                  </Grid>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default MansoryGallery;
