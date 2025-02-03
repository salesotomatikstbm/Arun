import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import git from "../../assets/img/about/html.png";
import html from "../../assets/img/about/html.png";
import css from "../../assets/img/about/html.png";
import js from "../../assets/img/about/html.png";
import react from "../../assets/img/about/html.png";
import nextjs from "../../assets/img/about/html.png";
import tailwind from "../../assets/img/about/html.png";
import sql from "../../assets/img/about/html.png";
import canva from "../../assets/img/about/html.png";

const skillsList = [
  {
    id: 1,
    skill: "Version Control",
    percentage: "Git, GitHub",
    image: git,
  },
  {
    id: 2,
    skill: "Core",
    percentage: "HTML 5, CSS 3, JavaScript, Java, Python",
    image: html, 
  },
  {
    id: 3,
    skill: "Library",
    percentage: "ReactJs, Redux, React router-dom",
    image: react,
  },
  {
    id: 4,
    skill: "Framework",
    percentage: "Next.js, Tailwind CSS, Bootstrap",
    image: nextjs, 
  },
  {
    id: 5,
    skill: "Database",
    percentage: "SQL, DynamoDB",
    image: sql,
  },
  {
    id: 6,
    skill: "Graphic Design",
    percentage: "Canva",
    image: canva, 
  },
];

const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Skills</h2>
              <p>
                I possess a wide range of technical skills in various domains.
                From development and version control to databases and graphic design, I continue to expand my knowledge.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({ id, skill, image, percentage }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                      >
                        <div className="abox myskill__item">
                          <div className="thumb">
                            <img src={image} alt={skill} />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">
                              {skill}
                            </span>
                            <h6 className="fw-600">{percentage}</h6>
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

export default Skills;
