import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";

import { images, images2 } from "../Utlits/marqueeItems";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Metting from "../Components/Metting/Metting";
import Services from "../Components/Services/Services";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Testimonial from "../Components/Testimonial/Testimonial";
import Blogs from "../Components/Blogs/Blogs";
import MarqueeWapper from "../Components/Shared/Marquee/MarqueeWapper";
import Awards from "../Components/About/Awards";
import Preloader from "../Components/Shared/Preloader/Preloader";

const Home = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false);
    }, 1500);
  }, []);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Arun</title>
        <meta
          name="description"
          content="Explore Arun Govindhasamy's portfolio. A React developer & web engineer specializing in frontend development, UI/UX design, JavaScript frameworks, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Arun Govindhasamy, Arun, Govindhasamy, Job,  React Developer, Web Engineer, Frontend Developer, JavaScript Developer, UI/UX Designer, Web Design, Software Engineer, Next.js Developer, Tailwind CSS, Bootstrap, HTML5, CSS3, Redux, REST API, Firebase, Full-stack Developer, Node.js, MongoDB, GraphQL, Express.js, TypeScript, React Native, Progressive Web Apps, SEO, Lighthouse Optimization, SSR, CSR, Vite, Web Performance, Web Accessibility, UX Research, Agile Development, GitHub, CI/CD, DevOps, Docker, AWS, Cloud Computing, Digital Marketing, Open Graph, Meta Tags, Web Security, Responsive Design, Mobile Optimization, JAMstack, Static Site Generation, Serverless, WebAssembly, Performance Testing, AI in Web Development, Machine Learning, Chatbots, Automation, Debugging, Testing, Jest, Cypress"
        />
        <meta name="author" content="Arun Govindhasamy" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) for social media */}
        <meta property="og:title" content="Arun Govindhasamy - React Developer & Web Engineer" />
        <meta
          property="og:description"
          content="Check out my portfolio showcasing React projects, UI/UX designs, and modern web development skills."
        />
        <meta property="og:url" content="https://www.arungovindhasamy.life/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.arungovindhasamy.life/preview-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arun Govindhasamy - React Developer & Web Engineer" />
        <meta
          name="twitter:description"
          content="Check out my portfolio showcasing React projects, UI/UX designs, and web development expertise."
        />
        <meta name="twitter:image" content="https://www.arungovindhasamy.life/preview-image.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.arungovindhasamy.life/" />
      </Helmet>

      {isFetching && <Preloader />}
      <MarqueeWapper direction="left" images={images} />
      <About />
      <MarqueeWapper direction="right" images={images2} />
      <Awards />
      <Projects />
      <Metting />
      <Services isHeading={true} />
      <WorkeProcess />
      {/* <Testimonial />
      <Blogs /> */}
      <ScrollRestoration />
    </>
  );
};

export default Home;
