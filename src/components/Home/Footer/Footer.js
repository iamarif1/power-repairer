import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './../FooterCol/FooterCol';

const Footer = () => {
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const about = [
        {name: "Our Services"},
        {name: "Members"},
        {name: "Engineers"}
    ]
    const services = [
      { name: "Oil Change" },
      { name: "Engine Repair" },
      { name: "Car Maintenance"}
    ];
    return (
      <footer className="footer-area clear-both">
        <div className="pt-5">
          <div className="d-flex justify-content-center">
            <div className="row w-75">
              <FooterCol key={2} menuTitle="Services" menuItems={services} />
              <FooterCol key={3} menuTitle="About" menuItems={about} />
              <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                <ul className="social-media list-inline">
                  <li className="list-inline-item">
                    <a href="//facebook.com">
                      <FontAwesomeIcon
                        className="icon active-icon"
                        icon={faFacebookF}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="//google.com">
                      <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="//instagram.com">
                      <FontAwesomeIcon className="icon" icon={faInstagram} />
                    </a>
                  </li>
                </ul>
                <div className="mt-5">
                  <h6>Call now</h6>
                  <button className="btn btn-primary">+2025550295</button>
                </div>
              </FooterCol>
            </div>
          </div>
          <div className="copyRight text-center">
            <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;