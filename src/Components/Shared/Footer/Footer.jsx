import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const socalList = [
  {
    id: 1,
    platform: "LinkedIn",
    icon: <ArrowRight />,
    link: "https://www.linkedin.com/in/arun-g-8422a3240/", 
    
  },
  {
    platform: "GitHub",
    icon: <ArrowRight />,
    link: "https://github.com/arungovindhasamygithub?tab=repositories",
    
  },
  {
    id: 3,
   
    platform: "Facebook",
    icon: <ArrowRight />,
    link: "https://www.facebook.com/people/Arun-G/pfbid0NaWPKFfFVm7QFcUJXYANVzB8uJcKvBBxfPJ8SNrbLbjJsCEiKgJ9pqebp7gsCxnpl/", 
  },
  {
    id: 4,
  
    platform: "Instagram",
    icon: <ArrowRight />,
    link: "https://www.instagram.com/arun_g_it/", 
  },
];

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Feel free to reach out for collaborations or inquiries!
                </p>
                <a href="mailto:arungwork63@gmail.com" className="email-link">
                  arungwork63@gmail.com
                </a>
              </div>
              </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socalList.map(({ id, icon, platform, link }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <a href={link} className="social__footer" target="_blank" rel="noopener noreferrer">
                          {platform}
                          <i>{icon}</i>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
          <p className="white">
  Copyright © {new Date().getFullYear()}{" "}
  <Link to={"/"} className="base">
    Arun
  </Link>{" "}
  All rights reserved.
</p>


            <a href="#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
