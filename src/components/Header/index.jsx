import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { updateLoaderFields } from "../../store/slices/LoaderSlice";
import { updateLoginFields } from "../../store/slices/LoginSlice";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import "./header.scss";

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const dispatch = useDispatch();

  const loggedIn = useSelector(({ login }) => login.loggedIn);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  const logoutUser = () => {
    dispatch(
      updateLoginFields({
        loggedIn: false,
      })
    );
    dispatch(
      updateLoaderFields({
        alertText: "Logged out successfully",
        severity: "success",
      })
    );
  };

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src="/images/Rho4.png" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li className="menu-item">
                      <NavLink
                        to="/reports"
                        onClick={() => setMobileToggle(false)}
                      >
                        Trading Reports
                      </NavLink>
                    </li>
                    {loggedIn && (
                      <li className="menu-item">
                        <NavLink
                          to="/upload"
                          onClick={() => setMobileToggle(false)}
                        >
                          Upload Reports
                        </NavLink>
                      </li>
                    )}
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                {loggedIn ? (
                  <NavLink to="/" onClick={logoutUser}>Logout</NavLink>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="/images/Rho4.png" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
