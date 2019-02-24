import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div className="footer">
      <h1>{props.children}</h1>
    </div>
  );
}

export default Footer;
