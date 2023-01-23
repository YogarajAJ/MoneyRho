import { Typography } from "@mui/material";
import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/Rho4.png"
                  logoAlt="Logo"
                  text="Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          
        <Div className="col-lg-12 col-sm-6">
            {/* <Div className="cs-copyright">Copyright © 2022 Money Rho.</Div> */}
            <Typography align="center">Copyright © 2022 Money Rho.</Typography>
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
