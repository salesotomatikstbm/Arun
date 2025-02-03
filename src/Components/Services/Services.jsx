import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Website Development",
    subHeading: "React & Next.js",
    para: "Building modern, responsive, and high-performance websites using React and Next.js to enhance user experience and scalability.",
  },
  {
    id: "02",
    heading: "Business Branding / Graphic Design",
    subHeading: "Canva, Adobe",
    para: "Creating visually appealing logos, social media graphics, and branding materials to establish a strong business identity.",
  },
  {
    id: "03",
    heading: "Design Engineering",
    subHeading: "Electrical AutoCAD",
    para: "Providing precise electrical design solutions using AutoCAD to ensure efficient and safe circuit layouts for various projects.",
  },
  {
    id: "04",
    heading: "Electrical Services",
    subHeading: "House, Apartment, Small-scale Industry",
    para: "Expert electrical installation, maintenance, and repair services for residential, commercial, and small-scale industrial setups.",
  },
  {
    id: "05",
    heading: "Photography Services",
    subHeading: "Function, Event, Nature",
    para: "Capturing beautiful moments with professional photography services for functions, events, and natural landscapes.",
  },
];

const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="My Special Service For Your Business Development"
            sortTitle="Services That i Provide"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
