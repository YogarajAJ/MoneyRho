import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import "./card.scss";

export default function Card({ title, src, alt }) {
  return (
    <Box
      // sx={{
      //   height: "100%",
      //   width: "100%",
      //   borderRadius: "15px",
      //   "&:hover": {
      //     filter: "drop-shadow(0px 0px 30px rgba(255, 74, 23, 0.5))",
      //   },
      // }}
      className="cs-card cs-style1">
      <>
      <img src={src} alt={alt}/>
      <Div className="cs-card_overlay" />
      <Div className="cs-card_info">
        <span className=" cs-hover_layer3 cs-accent_bg" />
        <h2 className="cs-card_title">{title}</h2>
      </Div>
      </>
    </Box>
    // <Link className="cs-card cs-style1">
    //   <>
    //     <img src={src} alt={alt} />
    // <Div className="cs-card_overlay" />
    // <Div className="cs-card_info">
    //    <span className=" cs-hover_layer3 cs-accent_bg" />
    //    <h2 className="cs-card_title">{title}</h2>
    //  </Div>
    //   </>
    // </Link>
  );
}
