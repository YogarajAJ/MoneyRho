import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../config/RealtimeDatabase";
import { updateFileDataFields } from "../../store/slices/FileDataSlice";
import { updateLoaderFields } from "../../store/slices/LoaderSlice";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";

export default function ContactPage() {
  const dispatch = useDispatch();
  const { name, email, mobile } = useSelector(({ fileData }) => fileData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    dispatch(
      updateFileDataFields({
        [e.target.name]: e.target.value,
      })
    );
  };

  const validateFields = () => {
    return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile);
  };

  const saveData = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }
    let user = { email, mobile, name };
    dispatch(
      updateLoaderFields({
        load: true,
      })
    );
    await addData(user, "guestUser/");
    dispatch(
      updateLoaderFields({
        load: false,
        alertText: "Thank you",
        severity: "success",
      })
    );
    dispatch(
      updateFileDataFields({
        email: "",
        mobile: "",
        name: "",
      })
    );
  };
  return (
    <>
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a trade <br/>in your mind?"
              subtitle="Get in Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            {/* <form className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Mobile*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form> */}
            <form onSubmit={saveData} className="row">
              <Div className="col-sm-12">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Email*</label>
                <input
                  className="cs-form_field"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <Spacing lg="20" md="20" />
              </Div>

              <Div className="col-sm-12">
                <label className="cs-primary_color">Mobile*</label>
                <input
                  type="tel"
                  className="cs-form_field"
                  name="mobile"
                  value={mobile}
                  onChange={handleChange}
                />
                <Spacing lg="20" md="20" />
              </Div>

              <button className="cs-btn cs-style1">
                <span>Send Message</span>
                <Icon icon="bi:arrow-right" />
              </button>
            </form>
          </Div>
        </Div>
      </Div>
    </>
  );
}
