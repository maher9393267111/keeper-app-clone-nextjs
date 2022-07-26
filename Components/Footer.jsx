import React from "react";

function Footer() {

    let year = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p className="footer-text">&copy; {year} Keeper</p>
    </footer>
  );
}

export default Footer;
