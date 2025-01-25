import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-8">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>
          &copy; {currentYear} for Hanzlu by Ashik Ibrahim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
