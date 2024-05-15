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
      <div className="p-4 flex items-center justify-center h-[500px] rounded-lg bg-[#e63946]">
        <p
          // ref={textRef}
          className="text-white  text-[2rem] sm:text-[6rem] md:text-[4rem] lg:text-[12rem] xl:text-[5rem] text-center font-sans "
        >
          Get the best out of your brand.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between pt-10 ">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p className="text-black text-2xl lg:text-6xl">Contact!</p>
          <p className="text-black mt-6 text-2xl lg:text-4xl font-mono">
            tannu3288044@gmail.com
          </p>
          <p className="text-black mt-4 text-2xl lg:text-4xl font-mono">
            8447576338
          </p>
        </div>
        <div className="lg:w-1/2">
          <div>
            <p className="text-black text-2xl lg:text-6xl">Follow ME</p>
            <p className="text-black cursor-pointer mt-6 text-2xl lg:text-4xl font-mono">
              <a
                href="https://www.linkedin.com/in/tannu-singh-029ba6213"
                target="__blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
          {/* <form className="max-w-md mx-auto">
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
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
