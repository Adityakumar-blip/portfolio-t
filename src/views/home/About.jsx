import React, { useEffect } from "react";
// import { gsap } from "/node_modules/gsap/gsap-core.js";

const About = () => {
  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.set("#creating, #marketing, #odyssey", { opacity: 0, y: 50 });

  //   tl.to("#creating", { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
  //     .to(
  //       "#marketing",
  //       { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
  //       "-=0.5"
  //     )
  //     .to(
  //       "#odyssey",
  //       { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
  //       "-=0.5"
  //     );
  // }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
        <div className="text-center md:text-left">
          <p id="creating" className="text-7xl md:text-8xl text-black">
            Creating
          </p>
          <p id="marketing" className="text-7xl md:text-8xl text-black">
            Marketing
          </p>
          <p id="odyssey" className="text-7xl md:text-8xl text-black">
            Odyssey
          </p>
          <button
            type="button"
            className="py-2.5 px-5 text-sm font-medium focus:outline-none bg-white rounded-full border border-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 text-black dark:border-gray-600 mt-10"
          >
            Know More
          </button>
        </div>
        <div className="h-90 w-90 md:h-[500px] md:w-[400px] rounded-xl m-2 overflow-hidden">
          <img
            src="https://cdn.dribbble.com/userupload/8150087/file/original-162a9c6cb140c569a9264c832e2c17be.png?resize=400x300&vertical=center"
            className="h-full w-full object-cover"
            alt="Marketing Odyssey"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
