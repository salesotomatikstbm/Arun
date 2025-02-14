import React from "react";
import { Helmet } from "react-helmet-async";
import { PlayFill, ArrowRight } from "react-bootstrap-icons";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";
import Accordion from "../Components/Accordion/Accordion";

import serDv1 from "../assets/img/project/ser-dv1.png";
import serDv2 from "../assets/img/project/ser-dv2.png";
import detialcontact from "../assets/img/contact/ser-detialcontact.png";
import { ScrollRestoration } from "react-router-dom";

const accordionList = [
  {
    id: "website-dev",
    heading: "Website Development (React & Next.js)",
    para: `Building modern, responsive, and high-performance websites using React and Next.js to enhance user experience and scalability.`,
  },
  {
    id: "branding-design",
    heading: "Business Branding / Graphic Design (Canva, Adobe)",
    para: `Creating visually appealing logos, social media graphics, and branding materials to establish a strong business identity.`,
  },
  {
    id: "design-engineering",
    heading: "Design Engineering (Electrical AutoCAD)",
    para: `Providing precise electrical design solutions using AutoCAD to ensure efficient and safe circuit layouts for various projects.`,
  },
  {
    id: "electrical-services",
    heading: "Electrical Services (House, Apartment, Small-scale Industry)",
    para: `Expert electrical installation, maintenance, and repair services for residential, commercial, and small-scale industrial setups.`,
  },
  {
    id: "photography-services",
    heading: "Photography Services (Function, Event, Nature)",
    para: `Capturing beautiful moments with professional photography services for functions, events, and natural landscapes.`,
  },
];

const ServiceDetails = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Service Details</title>
        <meta name="description" content="Enhance your business identity with our professional branding and graphic design services. We create logos, social media graphics, and marketing materials using Canva and Adobe." />
        <meta name="keywords" content="business branding, graphic design, logo design, branding materials, Canva, Adobe, social media graphics" />
        <meta name="author" content="Your Brand Name" />
        <meta property="og:title" content="Business Branding Services | Professional Branding & Design" />
        <meta property="og:description" content="Stand out with stunning branding designs. Our services include logo creation, social media graphics, and marketing materials for businesses." />
        <meta property="og:image" content={serDv1} />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHeader heading={"Business Branding"} page={"Business Branding"} />
      <section className="service__details overhid pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="ser__left__details">
                <div className="thumb">
                  <img src={serDv1} alt="Business Branding Service" />
                </div>
                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    About Business Branding Service
                  </h3>
                  <p className="fz-16 pra ttext__one">
                    Creating visually appealing logos, social media graphics,
                    and branding materials to establish a strong business
                    identity.
                  </p>
                  <p className="fz-16 pra">
                    Our service leverages tools like Canva and Adobe to craft
                    stunning visuals that define your brand, helping you stand
                    out in the market and communicate effectively with your
                    audience.
                  </p>
                </div>
                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    Specialization & Working Process
                  </h3>
                  <p className="fz-16 pra">
                    We specialize in creating branding elements that represent
                    your business's vision and values. Our working process
                    involves understanding your business needs, followed by
                    conceptualizing and executing the design to reflect your
                    unique identity.
                  </p>
                </div>
                <div className="paythumb position-relative">
                  <img src={serDv2} alt="Branding Process" />
                  <a
                    href="https://www.youtube.com/embed/GxmfcnU3feo?si=T_JeKE_LLTKqeN4u"
                    className="video__80 video-btn"
                  >
                    <i>
                      <PlayFill />
                    </i>
                  </a>
                </div>
                <div className="ser__components">
                  <h2 className="whites mb-5">Questions ? You're Covered</h2>
                  <div className="accordion" id="accordionExample">
                    {accordionList.map(({ id, heading, para }) => (
                      <Accordion key={id} id={id} heading={heading} para={para} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service__right__wrap">
                <div className="service__rightbox mb-30">
                  <h3>Service List</h3>
                  <a href="#0" className="link__box mb-15">
                    Website Development
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Business Branding / Graphic Design
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Design Engineering
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Electrical Services
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Photography Services
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box">
                    Web Development
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
                <div className="service__rightbox">
                  <div className="thumb">
                    <img src={detialcontact} alt="Contact for Services" />
                    <a href="#0" className="cmn--btn">
                      <span>Contact Me</span>
                      <span>
                        <i>
                          <ArrowRight />
                        </i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default ServiceDetails;
