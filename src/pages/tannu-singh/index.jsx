import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import background from "@/assets/background.jpg";

const index = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="relative h-[90vh] w-full text-center">
        <Image
          src={background}
          layout="fill"
          objectFit="cover"
          alt="background"
          priority
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <p className="font-sans font-bold text-[80px] text-[#252422]">
            Every Brand
          </p>
          <p className="font-sans text-[80px] text-[#252422]">
            Deserves A Marketing Expert
          </p>
        </div>
      </div>
      <div className="marquee w-full">
        <div className="marquee-content flex gap-10 text-white text-xl font-bold">
          <p>Social Media Marketing</p>
          <p>Influencer Marketing</p>
          <p>Digital Marketing</p>
          <p>Content Creation</p>
          <p>Content Management</p>
          <p>SEO</p>
        </div>
      </div>
    </div>
  );
};

export default index;
