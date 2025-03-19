import React from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import Form from "../../Components/Shared/Form/Form";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Get in Touch</title>
        <meta
          name="description"
          content="Have questions or need assistance? Contact us today via phone, email, or visit our office in Thottiyam, Kallakurichi. We are happy to help!"
        />
        <meta
          name="keywords"
          content="Contact Us, Get in Touch, Support, Customer Service, Inquiry, Thottiyam, Kallakurichi, Chennai, Tamilnadu, India"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.arungovindhasamy.life/contact" />
      </Helmet>

      <PageHeader
        heading={"Let's Start Something"}
        page={"Let's Start Something"}
      />
      <section className="contact__section">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="contact__box">
                <Form isColTwo={false} />
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="contact__rightside cmn__bg">
                <h4 className="mb-30">Feel free to contact me anytime</h4>
                <div className="contact__item mb-20">
                  <span className="he1">Email</span>
                  <a href="mailto:arungwork63@gmail.com">arungwork63@gmail.com</a>
                </div>
                <div className="contact__item mb-20">
                  <span className="he1">Phone</span>
                  <a href="tel:+916383791772">+91 6383791772</a>
                </div>
                <div className="contact__item">
                  <span className="he1">Address</span>
                  <span className="address">Thottiyam, Kallakurichi, 606 201</span>
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

export default Contact;
