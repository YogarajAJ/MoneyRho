import React from "react";
import Slider from "react-slick";
import Div from "../Div";
import Portfolio from "../Portfolio";


export default function PortfolioSlider() {
  const portfolioData = [
    {
      title: "Week 1",
      subtitle: "See Details",
      src: "/images/Carousel1.png",
    },
    {
      title: "Week 2",
      subtitle: "See Details",
      src: "/images/Carousel2.png",
    },{
      title: "Week 1",
      subtitle: "See Details",
      src: "/images/Carousel1.png",
    },
    {
      title: "Week 2",
      subtitle: "See Details",
      src: "/images/Carousel2.png",
    },{
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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
      {portfolioData.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
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
