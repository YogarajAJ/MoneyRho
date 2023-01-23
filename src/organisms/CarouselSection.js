import Carousel from "react-material-ui-carousel";
import React from "react";

const CarouselItem = ({ item = {} }) => {
  return (
    <Box
      sx={{
        height: { xs: "25vh", lg: "50vh" },
        width: "100%",
      }}
    >
      <img
        src={get(item, "hsection_image_url", "")}
        alt={get(item, "hsection_image_url", "")}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};
const CarouselSection = () => {
    const items = [];
  return (
    <Carousel>
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselSection;
