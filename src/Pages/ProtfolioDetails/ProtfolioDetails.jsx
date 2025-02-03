import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/protfolio/prot-detailsbig.png";
import detailbg1 from "../../assets/img/protfolio/prot-detials2.png";
import detailbg2 from "../../assets/img/protfolio/prot-detials2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const ProtfolioDetails = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <PageHeader
        heading={"Brand Identity & Motion Design"}
        page="Brand Identity & Motion Design"
      />
      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={detailbg} alt="img" />
            <div className="prot__detail__contact">
              <h3>Project Info</h3>
              <div className="prot__itembox">
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Clients</h5>
                    <p>Otomatiks</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>Sept 19, 2024</p>
                  </div>
                </div>
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Category</h5>
                    <p>Website</p>
                  </div>
                  <div className="items">
                    <h5>Location</h5>
                    <p>Vellore</p>
                  </div>
                </div>
              </div>
              <ul className="social d-flex gap-3">
                {socialIcons.map(({ icon, id }) => (
                  <li key={id}>
                    <Link to={""}>
                      <i>{icon}</i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="details__textwrap">
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <p className="fz-16 pra ttext__one">
                At Otomatiks, we push the boundaries of automation and technology. By integrating motion design with brand identity, we create immersive experiences that resonate with audiences. Our unique approach merges cutting-edge technology with art, ensuring that every project we take on captures the essence of our client's vision.
              </p>
              <p className="fz-16 pra">
                We believe in not just designing, but in crafting meaningful experiences that drive growth and build lasting connections. Our work is driven by a commitment to innovation and a passion for excellence. Through each project, Otomatiks redefines what's possible, bringing your ideas to life with precision and creativity.
              </p>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Challenge</h3>
              <p className="fz-16 pra ttext__one">
                The challenge was to design a brand identity and motion graphics that not only represented Otomatiks’ core values but also set them apart in a highly competitive market. The goal was to convey a sense of innovation, reliability, and forward-thinking while maintaining a balance between modern design aesthetics and user-friendly functionality.
              </p>
              <ul className="challenge__list">
                <li>
                  Create a seamless brand experience that aligns with Otomatiks’ mission.
                </li>
                <li>
                  Develop motion design elements that engage and capture attention without overwhelming the viewer.
                </li>
                <li>
                  Ensure the final design communicates Otomatiks' innovative approach to automation.
                </li>
              </ul>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h3 className="text__boxhead">Solution & Result</h3>
              <p className="fz-16 pra">
                The solution we provided was a dynamic brand identity that reflects the cutting-edge technology and automation solutions that Otomatiks offers. The motion design was designed to complement the brand's messaging, creating an experience that is both visually stunning and informative. The result was a strong, memorable brand presence that perfectly captured Otomatiks’ core values and vision.
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="thumb">
                <img src={detailbg1} alt="img" />
              </div>
              <div className="thumb">
                <img src={detailbg2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="protfolidetails__section cmn__bg pt-120 pb-120">
        <div className="container">
          <div className="project__head text-center">
            <span
              className="common__sub"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Protfolio
            </span>
            <h2 className="fw-500" data-aos="fade-up" data-aos-duration="1000">
              Related Work
            </h2>
          </div>

          <div className="project__wrapone">
            {projectList
              .slice(0, 2)
              .map(({ heading, id, image, subHeading }, index) => (
                <ProjectCard
                  key={id}
                  image={image}
                  heading={heading}
                  subHeading={subHeading}
                  openLightbox={openLightbox}
                  index={index}
                />
              ))}
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            images={imagesList}
            onClose={closeLightbox}
            currentId={currentId}
          />
        )}
      </section>
    </>
  );
};

export default ProtfolioDetails;
