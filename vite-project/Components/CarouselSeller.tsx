import React from "react";
import { Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const exampleItems = [
  {
    image: "../src/assets/Images/image_product.png",
  },
  {
    image: "../src/assets/Images/image_product2.png",
  },
  {
    image: "../src/assets/Images/image_product3.png",
  },
  {
    image: "../src/assets/Images/image_product4.png",
  },
];

const ExampleCarousel = () => {
  return (
    <Carousel
      animation="slide"
      indicators={true}
      cycleNavigation={true}
      fullHeightHover={false}
      sx={{
        maxWidth: "390px",
        flexGrow: 1,
        margin: "auto",
      }}
    >
      {exampleItems.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.100",
        color: "black",
        backgroundImage: `url(${props.item.image})`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "250px", 
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        p: 4,
      }}
      elevation={10}
    >
      <Typography variant="h4">{props.item.name}</Typography>
      <Typography>{props.item.description}</Typography>
    </Paper>
  );
}


export default ExampleCarousel;