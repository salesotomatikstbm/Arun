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

const Aruna = () => {
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
      <PageHeader heading={"Aruna Arul Kumar"} page="Freelancing Learning" />
      <section className="protfolio__details pb-5">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={detailbg} alt="img" />
            <div className="prot__detail__contact">
              <h3>Aruna Project Info</h3>
              <div className="prot__itembox">
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Learn</h5>
                    <p>Freelancer</p>
                  </div>
                  <div className="items">
                    <h5>Date Of Birth</h5>
                    <p>Aug 03 2002</p>
                  </div>
                </div>
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Category</h5>
                    <p>Website</p>
                  </div>
                  <div className="items">
                    <h5>Address</h5>
                    <p>Kallakurichi</p>
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
              <h3 className="text__boxhead">Curriculum for Computer Training Plan</h3>
              <div className="curriculum-content">
                <h4>1. Introduction to Computers</h4>
                <ul>
                  <li>What is a computer?</li>
                  <li>Types of computers (Desktop, Laptop, Tablet)</li>
                  <li>Basic components:
                    <ul>
                      <li>Monitor</li>
                      <li>CPU</li>
                      <li>Keyboard</li>
                      <li>Mouse</li>
                      <li>Speakers</li>
                      <li>Printer</li>
                    </ul>
                  </li>
                </ul>
                <h4>2. Basic Computer Operations</h4>
                <ul>
                  <li>How to turn on and shut down a computer</li>
                  <li>Understanding the desktop, taskbar, and start menu</li>
                  <li>Using the keyboard and mouse</li>
                </ul>
                <h4>3. WiFi & Internet Basics</h4>
                <ul>
                  <li>How to connect to a WiFi network</li>
                  <li>Using a web browser (Google Chrome, Microsoft Edge)</li>
                  <li>Searching on Google effectively</li>
                  <li>Safe browsing and internet safety</li>
                </ul>
                <h4>4. Using System Features</h4>
                <ul>
                  <li>Creating and managing folders & files</li>
                  <li>Copying, pasting, and deleting files</li>
                  <li>Using USB drives and external storage</li>
                </ul>
                <h4>5. Basic Applications</h4>
                <ul>
                  <li>Notepad – Writing and saving simple text documents</li>
                  <li>Paint – Drawing, coloring, and saving images</li>
                  <li>MS Office Basics:
                    <ul>
                      <li>MS Word – Creating and formatting documents</li>
                      <li>MS Excel – Basic spreadsheets and calculations</li>
                      <li>MS PowerPoint – Creating simple presentations</li>
                    </ul>
                  </li>
                </ul>
                <h4>6. Google Applications</h4>
                <ul>
                  <li>Using Gmail for sending and receiving emails</li>
                  <li>Google Docs, Google Sheets, and Google Slides</li>
                  <li>Google Drive for cloud storage</li>
                </ul>
                <h4>7. Introduction to Freelancing</h4>
                <ul>
                  <li>What is freelancing?</li>
                  <li>Skills needed for online work</li>
                  <li>Creating a profile on freelancing websites</li>
                  <li>Practicing small projects like typing, designing in Canva, and data entry</li>
                </ul>
                <h4>8. Final Practice & Q&A</h4>
                <ul>
                  <li>Assign a mini project (e.g., creating a document, a simple painting, or a small presentation)</li>
                  <li>Reviewing all topics covered</li>
                  <li>Answering any questions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Aruna;
