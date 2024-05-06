import React, { useRef, useEffect } from "react";
// import { Draggable } from "gsap/all";
// import gsap from "gsap";

const Footer = () => {
  // const textRef = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(Draggable);
  //   Draggable.create(textRef.current, {
  //     type: "x,y",
  //     edgeResistance: 0.65,
  //   });

  //   const textAnimation = gsap.to(textRef.current, {
  //     scale: 1.2,
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 0.5,
  //     paused: true,
  //   });

  //   textRef.current.addEventListener("mouseenter", () => {
  //     textAnimation.play();
  //   });

  //   textRef.current.addEventListener("mouseleave", () => {
  //     textAnimation.pause();
  //     gsap.to(textRef.current, { scale: 1, duration: 0.5 });
  //   });
  // }, []);

  return (
    <footer className="p-4">
      <div className="p-4 rounded-lg bg-black">
        <p
          // ref={textRef}
          className="text-white  text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[14rem] text-center font-sans "
        >
          Tannu Singh
        </p>
      </div>
      <div className="flex flex-col lg:flex-row pt-4 ">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p className="text-black text-2xl lg:text-6xl">Now!</p>
          <p className="text-black text-2xl lg:text-6xl font-sans">
            Let's Discuss Your Project
          </p>
        </div>
        <div className="lg:w-1/2">
          <form className="max-w-md mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative z-0 mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              {/* Other input fields here */}
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
