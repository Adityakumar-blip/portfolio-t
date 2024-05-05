import ServiceHover from "@/components/ServiceHover";
import React from "react";

const Services = () => {
  const data = [
    {
      id: 0,
      title: "Content Management",
    },
    {
      id: 1,
      title: "Social Media Ads",
    },
    {
      id: 1,
      title: "SEO",
    },
  ];
  return (
    <div>
      <ServiceHover data={data} />
    </div>
  );
};

export default Services;
