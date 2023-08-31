import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Button,
  Grid,
} from '@chakra-ui/react';

const MansoryGallery = ({finalImageData, searchPrompt}) => {
  const [imageData, setImageData] = useState([
    { imageLink: 'https://th.bing.com/th/id/OIP.YxzI-y8ycOFwUfiUC4B0tAHaLH?pid=ImgDet&rs=1', label: 'The quick brown fox' },
    { imageLink: 'https://th.bing.com/th/id/OIP.eYWPIwo-TTvCJdALoFAhNAHaHa?pid=ImgDet&rs=1', label: 'random' },
    { imageLink: 'https://th.bing.com/th/id/R.50ec7bef4e36fd6fba204f3970f950ad?rik=4VslbDpyxrMZdQ&pid=ImgRaw&r=0', label: 'random' },
    { imageLink: 'https://th.bing.com/th/id/R.d58339de61b5d07fd4db988f8e8a7cdd?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw&r=0', label: 'random' },
    { imageLink: 'https://th.bing.com/th/id/R.2c2d80ebf7b7f10b849996610480e8c2?rik=nfxRfL7iVnEzfQ&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2017%2f05%2fBeautiful-girls-Desktop-Wallpaper-.jpg&ehk=pvr8BGdhUe4QttMfOqmD1%2bGBOFcXeo9ffQnSMZVwNNw%3d&risl=&pid=ImgRaw&r=0', label: 'Another random image'}
  ])

  const [filteredData, setFilteredData] = useState(imageData)

  const handleDataSearch = () => {
    let newData = imageData.filter((image) => image.label.toLowerCase().includes(searchPrompt.toLowerCase()))
    setFilteredData(newData)
  }

  const handleNewData = () => {
    setFilteredData([...filteredData, finalImageData])
  }
  
  const handleDelete = (data) => {
    setImageData(imageData.filter((image) => image.imageLink !== data.imageLink))
    let newImageData = filteredData.filter((image) => image.imageLink !== data.imageLink)
    setFilteredData(newImageData)
  }
  useEffect(() => {
    if(finalImageData.imageLink && finalImageData.label){
      handleNewData();
    }
  }, [finalImageData]);

  useEffect(() => {
    handleDataSearch( )
  }, [searchPrompt]);

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <>
      <Box
        padding={4}
        mt={10}
        sx={{ columnCount: [1,2,3], columnGap: '32px' }}
        position={'relative'}
      >
        {filteredData.map((image, i) => {
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
