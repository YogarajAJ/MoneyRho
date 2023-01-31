import React from "react";
import { Icon } from "@iconify/react";
import { getData } from "../../config/RealtimeDatabase";

export default function ContactInfoWidget({ withIcon, title }) {
  const [contactNumber, setContactNumber] = React.useState("");
  
  React.useEffect(() => {
    const getAdminContact = async () => {
      const contact = await getData("admin/contact");
      setContactNumber(contact);
    };
    getAdminContact();
  }, []);
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
          ) : (
            ""
          )}
          {contactNumber}
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:envelope" />
            </span>
          ) : (
            ""
          )}
          info@moneyrho.com
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:map-marker" />
            </span>
          ) : (
            ""
          )}
          HSR Layout ,Bangalore
        </li>
      </ul>
    </>
  );
}
