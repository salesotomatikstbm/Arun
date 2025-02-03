import React from "react";
import { XLg, ChevronRight } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";
import { Linkedin, Github, Facebook, Instagram } from "react-bootstrap-icons"; // Import icons

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

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className="remove__click d-flex justify-content-center align-items-center"
      >
        <i>
          <XLg />
        </i>
      </div>
      <div className="sub__contact__wrapper d-grid">
        <Link to={""} className="side-logo">
          <img src={logo} alt="img" />
        </Link>
        <p>
          Seeking a responsible position to apply my skills and experience in
          an innovative organization that offers opportunities for professional
          growth. Over 3+ years of experience in front-end technologies,
        </p>
        <div className="sub__contact-left d-grid">
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block">Current address </span>
              <span className="textp"> Tambaram, Chennai </span>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> Email </span>
              <Link className="textp" href="mailto:arungwork63@gmail.com">
                arungwork63@gmail.com
              </Link>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> Call now </span>
              <Link className="textp" href="tel:+916383791772">
                +91 6383791772
              </Link>
            </div>
          </div>
        </div>
        <div className="sub__contact-right mb-80 position-relative">
          <ul className="social d-flex gap-3">
            {contactInfo[3].socalContact.map(({ icon, link }, index) => (
              <li key={index}>
                <Link to={link} target="_blank" rel="noopener noreferrer">
                  <i>{icon}</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={""}
          className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
        >
          <span>
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="get__text"> Let's Talk </span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
