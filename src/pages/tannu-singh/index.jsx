import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect } from "react";
import background from "@/assets/background.jpg";
import About from "@/views/home/About";
import Work from "@/views/home/Work";
import ServiceHover from "@/components/ServiceHover";
import Services from "@/views/home/Services";
import Footer from "@/views/home/Footer";

// import { gsap } from "gsap/gsap-core";

const index = () => {
  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.set("#brand, #marketing", { opacity: 0, y: 50 });

  //   tl.to("#brand, #marketing", {
  //     opacity: 1,
  //     y: 0,
  //     duration: 1,
  //     stagger: 0.5,
  //     ease: "power2.out",
  //   });
  // }, []);
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
        <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <p
            id="brand"
            class="font-sans font-bold text-70px md:text-[80px] header-heading text-[#252422]"
          >
            Every Brand
          </p>
          <p
            id="marketing"
            class="font-sans text-38px md:text-[80px] sm:text-24px header-heading text-[#252422]"
          >
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
      <About />
      <Work />
      <Services />
      <Footer />
    </div>
  );
};

export default index;
