import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Education = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
              I hold a degree in Electrical and Electronics Engineering (EEE), where I gained in-depth knowledge of electrical systems, circuit design, and power electronics. My education has equipped me with strong analytical and problem-solving skills, enabling me to work with various technologies and innovations in the field. 
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                <div className="expri__cont">
                    <h5 className="mb-15 text-white"> BE Electrical and Electroincs Engineering - 73 %</h5>
                    <p className="fz-18 pra d-block">Gnanamani college of Technology ,Namakkal</p>
                  </div>
                  <span className="fz-18 fw-500 base">Jul 2016 - Apr 2020</span>
                 
                </div>
                <div className="exri__item">
                <div className="expri__cont">
                    <h4 className="mb-15 text-white">HSC - 75 %</h4>
                    <p className="fz-18 pra d-block">Goverment Higher Secondary School, Thottiyam</p>
                  </div>
                  <span className="fz-18 fw-500 base">Jun 2015 - Mar 2016</span>
                 
                </div>
                <div className="exri__item">
                <div className="expri__cont">
                    <h4 className="mb-15 text-white">SSLC - 89 %</h4>
                    <p className="fz-18 pra d-block">Goverment Higher Secondary School, Thottiyam</p>
                  </div>
                  <span className="fz-18 fw-500 base">Jun 2013 - Mar 2014</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
