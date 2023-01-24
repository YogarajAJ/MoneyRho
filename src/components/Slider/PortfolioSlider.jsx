import React from "react";
import Slider from "react-slick";
import { fetchImages } from "../../service/FileService";
import Div from "../Div";
import Portfolio from "../Portfolio";

export default function PortfolioSlider() {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    const getImages = async () => {
      const imageList = await fetchImages();
      setImages(imageList);
      console.log(imageList);
    };
    getImages();
  }, []);
  
  const portfolioData = [
    {
      src: "/images/slider/portfolio_1.jpeg",
    },
    {
      title: "Week 2",
      subtitle: "See Details",
      src: "/images/slider/portfolio_1.jpeg",
    },
    {
      title: "Week 1",
      subtitle: "See Details",
      src: "/images/slider/portfolio_1.jpeg",
    },
    {
      title: "Week 2",
      subtitle: "See Details",
      src: "/images/slider/portfolio_1.jpeg",
    },
    {
      title: "Week 1",
      subtitle: "See Details",
      src: "/images/Carousel1.png",
    },
  ];

  /** Slider Settings **/
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0%",
    slidesToShow: 3,
    speed: 1000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0%",
          slidesToShow: 1,
          speed: 1000,
          dots: true,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
      {images.map((item, index) => (
        <Div key={index}>
          <Portfolio
            src={item}
          />
        </Div>
      ))}
    </Slider>

    // <div className="custom-slider-container">
    //   <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
    //     {portfolioData.map((item, index) => (
    //       <div key={index}>
    //         <img
    //           src={item.src}
    //           alt={item.title}
    //           style={{ height: "100%", width: "100%" }}
    //         />
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
  );
}
