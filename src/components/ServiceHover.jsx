import React from "react";

const ServiceHover = ({ data }) => {
  return (
    <div className="p-4 mt-10">
      <p className="text-black">Services</p>
      <div className="mt-2">
        {data?.map((service, index) => (
          <p className="text-black md:text-8xl text-4xl mb-6 font-regular font-sans ">
            {service.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceHover;
