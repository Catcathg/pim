import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

//images
import CarouselImage1 from '../src/assets/Images/carousel_image1.png'
import EarthImage2 from '../src/assets/Images/EarthImage2.png'
import EarthImage3 from '../src/assets/Images/EarthImage3.png'

const images = [CarouselImage1, EarthImage2, EarthImage3];

function ImageCarousel() {
  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, margin: 'auto', mt: 5 }}>
      <Carousel>
        {images.map((image, i) => (
          <Paper key={i} elevation={10}>
            <Box
              component="img"
              sx={{
                width: '390px',
                height: '150px',
                objectFit: 'cover'
              }}
              src={image}
              alt={`Slide ${i}`}
            />
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;