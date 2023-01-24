import React from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import "./portfolio.scss";

export default function Portfolio({ href, src, title, subtitle, variant }) {
  return (
    <Div className={`cs-portfolio cs-bg ${variant ? variant : "cs-style1"}`}>
      <>
        <Div className="cs-portfolio_hover" />
        <Div
          className="cs-portfolio_bg cs-bg"
          style={{
            height: "70vh",
            width: "100%",
            backgroundImage: `url("${src}")`,
          }}
        />
      </>
    </Div>
  );
}
