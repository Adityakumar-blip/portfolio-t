import React from "react";
import WorkCard from "@/components/WorkCard";
import { useRouter } from "next/router";

const Work = () => {
  const router = useRouter();
  const data = [
    {
      src: "https://almujammilfragrance.com/cdn/shop/products/summer69.jpg?v=1680714073&width=750",
      title: "Al-Mujammil",
      link: "1",
    },
    {
      src: "https://img.freepik.com/free-vector/facebook-post-illustration-notifications_23-2149024883.jpg?size=626&ext=jpg&ga=GA1.1.128595269.1715744696&semt=ais_user",
      title: "Brand Buzzar - Digital Marketing Agency",
      link: "2",
    },
    {
      src: "https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149368728.jpg?size=626&ext=jpg",
      title: "SolutionOne ERP",
      link: "3",
    },
    // {
    //   src: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
    //   title: "Bholanath Ayurveda",
    //   link: "4",
    // },
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
                  query: { id: image.link },
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
