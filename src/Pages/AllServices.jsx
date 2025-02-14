import React from "react";
import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Services from "../Components/Services/Services";
import Metting from "../Components/Metting/Metting";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Pricing from "../Components/Pricing/Pricing";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";

const AllServices = () => {
  return (
    <>
      <Helmet>
        <title>Our Services</title>
        <meta
          name="description"
          content="Discover our expert services, including Website Development, Branding, Electrical Services, Graphic Design, and Photography. Get high-quality solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="Website Development, Business Branding, Graphic Design, Electrical Services, Photography, Professional Services"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.arungovindhasamy.life/all-services" />
      </Helmet>

      <PageHeader heading={"Services All"} page={"Services All"} />
      <Services isHeading={false} />
      <Metting />
      {/* <Pricing /> */}
      <WorkeProcess />
      <ScrollRestoration />
    </>
  );
};

export default AllServices;
