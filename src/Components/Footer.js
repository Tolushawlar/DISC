import React from "react";

function Footer() {
  return (
    <div
    className="foot"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "white",
        marginTop: "50px",
      }}
    >
      <p 
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          color: "white !important",
          fontFamily: "Lato",
        }}
     >&copy; Copyright {new Date().getFullYear()}, All Rights Reserved by BeTeachable</p>
    </div>
  );
}

export default Footer;
