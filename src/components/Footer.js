import React from "react";

const FooterInfo = props => {
  return (
    <footer>
      <ul className="list-group">
        {props.hotelContactInfo.map((information, index) => (
          <li key={index}>{information}</li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterInfo;
