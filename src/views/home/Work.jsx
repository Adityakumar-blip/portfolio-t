import React from "react";
import WorkCard from "@/components/WorkCard";
import { useRouter } from "next/router";

const Work = () => {
  const router = useRouter();
  const data = [
    {
      src: "https://images.unsplash.com/photo-1682932006997-91aa688fb5c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      title: "Al-Mujjamil",
      link: "1",
    },
    {
      src: "https://images.unsplash.com/photo-1630082900894-edbd503588f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNoYW1wb298ZW58MHx8MHx8fDA%3D",
      title: "Zenio-Feel the Skin",
      link: "2",
    },
    {
      src: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
      title: "SolutionOne ERP",
      link: "3",
    },
    {
      src: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Bholanath Ayurveda",
      link: "4",
    },
  ];
  return (
    <div className="px-4">
      <div>
        <p className="text-black">Recent Works</p>
      </div>
      <div className="text-center mt-[30px]">
        <div className="columns-1 sm:columns-2 lg:columns-2  ">
          {data.map((image, index) => (
            <WorkCard
              src={image.src}
              title={image.title}
              key={index}
              onClick={() => {
                router.push({
                  pathname: "/case-study",
                  query: image.link,
                });
              }}
            />
          ))}
        </div>
        {/* <button
        type="button"
        class="py-2.5 w-[200px] px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        See All Work
      </button> */}
      </div>
    </div>
  );
};

export default Work;
