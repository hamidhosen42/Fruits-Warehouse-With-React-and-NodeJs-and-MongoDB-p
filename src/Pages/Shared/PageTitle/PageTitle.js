import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title> {title}-Fruits Warehouse Management Websites</title>
    </Helmet>
  );
};

export default PageTitle;
