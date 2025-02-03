import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
              Seeking a responsible position to apply my skills and experience in an innovative organization that offers opportunities for professional growth.
Over 3+ years of experience in front-end technologies, including HTML, CSS, JavaScript, ReactJS, Redux, React Router, Bootstrap, Tailwind CSS, Next.js, CMS, and SEO.
Proficient in using tools like Visual Studio Code and GitHub.
Knowledgeable in Agile methodologies.
Quick to learn new technologies and able to work independently.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                <div className="expri__cont">
                    <h4 className="mb-15 text-white">React Developer</h4>
                    <p className="fz-18 pra d-block">Otomatiks</p>
                  </div>
                  <span className="fz-18 fw-500 base">Jun 2024 - Present</span>
                 
                </div>
                <div className="exri__item">
                <div className="expri__cont">
                    <h4 className="mb-15 text-white">Web Developer & Trainer</h4>
                    <p className="fz-18 pra d-block">Adventure Technology Solutions Private Limited </p>
                  </div>
                  <span className="fz-18 fw-500 base">Aug 2021 - Apr 2024</span>
                 
                </div>
                <div className="exri__item">
                <div className="expri__cont">
                    <h4 className="mb-15 text-white">Electrical Maintenance Engineer</h4>
                    <p className="fz-18 pra d-block">Aqua Sub Engineering / Texmo</p>
                  </div>
                  <span className="fz-18 fw-500 base">Jan 2021 - Jul 2021</span>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
