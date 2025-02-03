import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Github,
  Linkedin,
  Instagram,
  PlayFill,
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/banner/banner-man.png";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";
import bnArrow from "../../assets/img/banner/bn-arrow.png";
import VideoPlay from "../Shared/VideoPlay/VideoPlay";

const socalIcon = [
  {
    id: 1,
    icon: <Github />,
    link: "https://github.com/arungovindhasamygithub?tab=repositories"
  },
  {
    id: 2,
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/arun-g-8422a3240/"
  },
  {
    id: 3,
    icon: <Facebook />,
    link: "https://www.facebook.com/people/Arun-G/pfbid0NaWPKFfFVm7QFcUJXYANVzB8uJcKvBBxfPJ8SNrbLbjJsCEiKgJ9pqebp7gsCxnpl/"
  },
  {
    id: 4,
    icon: <Instagram />,
    link: "https://www.instagram.com/arun_g_it/"
  },
];

const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if (!position) {
      setPosition(true);
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const openSocialLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
              <Link to={""} className="bn__currently">
                <span className="d-block">
                  Currently available for freelance
                </span>
                <span className="d-flex gap-4 align-items-center">
                  India
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
              <h1>
                <span className="hone"> Web Development</span>
                <span className="d-block designers" data-text="Developer">
                  Developer
                </span>
              </h1>
              <div className="video__area">
                <img src={bnArrow} className="vid__arrow" alt="img" />
                <div onClick={openLightbox} className="video__80 video-btn">
                  <i>
                    <PlayFill />
                  </i>
                </div>
                <span className="proces">Work Process</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`banner__thumb  ${
                position ? "right_up_animat" : "right_up"
              }`}
            >
              <img src={bannerMan} alt="man-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <Link to={""}>
            <img src={dial} alt="img" />
          </Link>
          <Link to="tel:+916383791772">+91 6383791772</Link>
        </div>
        <div className="right__infoscroll">
          <Link className="scroll">
            scroll down
          </Link>
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
      </div>
      <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <Link to={""} className="scroll">
            Follow Me
          </Link>
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
        <div className="banner__xlsocial">
          <ul className="banner__soci d-grid justify-content-center">
            {socalIcon.map(({ icon, id, link }) => {
              return (
                <li key={id}>
                  <a
                    href="#0"
                    onClick={() => openSocialLink(link)} 
                    className="social__footer"
                  >
                    <i>{icon}</i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {lightboxOpen && (
        <VideoPlay
          setLightboxOpen={setLightboxOpen}
          url="https://www.youtube.com/embed/GxmfcnU3feo?si=1GkftFPi7R_ifmqg"
        />
      )}
    </section>
  );
};

export default Banner;
