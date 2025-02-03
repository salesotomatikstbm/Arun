import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  Github,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "arungwork63@gmail.com",
  },
  {
    id: 2,
    system: "Phone",
    contact: "+91 6383791772",
  },
  {
    id: 3,
    system: "Current Location",
    contact: "Tambaram, Chennai",
  },
  {
    id: 4,
    system: "Follow",
    socalContact: [
      {
        icon: <Linkedin />,
        link: "https://www.linkedin.com/in/arun-g-8422a3240/",
      },
      {
        icon: <Github />,
        link: "https://github.com/arungovindhasamygithub?tab=repositories",
      },
      {
        icon: <Facebook />,
        link: "https://www.facebook.com/people/Arun-G/pfbid0NaWPKFfFVm7QFcUJXYANVzB8uJcKvBBxfPJ8SNrbLbjJsCEiKgJ9pqebp7gsCxnpl/",
      },
      {
        icon: <Instagram />,
        link: "https://www.instagram.com/arun_g_it/",
      },
      
    ],
  },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                I am a dedicated professional who values efficiency and precision in my work. With a strong commitment to quality and innovation, I strive to deliver the best results in every project. Always eager to learn and adapt, I believe in continuous improvement and collaboration to achieve excellence.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">
                              {system}
                            </span>
                            <Link to={""}>{contact}</Link>
                            {socalContact && (
  <ul className="d-flex align-items-center gap-2 gap-xl-4">
    {socalContact.map((social, index) => (
      <li key={index}>
        <Link to={social.link} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </Link>
      </li>
    ))}
  </ul>
)}

                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
