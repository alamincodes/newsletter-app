import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="flex gap-4 underline  mt-2">
          <a href="mailto:mdalamin88248@gmail.com">Mail</a>
          <Link to="/team">
          <h4>Our Team</h4>
          </Link>
        </div>
        
    );
};

export default Footer;