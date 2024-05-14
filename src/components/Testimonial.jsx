import { useRouter } from "next/router";
import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import instagram from "../assets/instagram.png";

const Testimonial = ({ props }) => {
  const router = useRouter();

  const data = [
    {
      id: 1,
      name: "Almujammil Fragrance",
      img: "https://cdn.dribbble.com/users/9975769/screenshots/17438983/media/c1d144c49e0d26210726c9252bed66f3.png",
      intro:
        "Al-Muzzamil, a UK-based perfume selling platform, has emerged as abeacon of luxury and sophistication in the competitive fragrance industry. Founded with a vision to curate exquisite scents from around the globe, Al-Muzzamil has quickly garnered a loyal customer base through its strategic marketing efforts and unparalleled customer service",
      challenges: [
        {
          title: "Limited Brand Awareness",
          desc: "Despite offering high-quality products, the brand had limited awareness among their target audience, making it difficult to drive traffic to their website and generate sales.",
        },
        {
          title: "Low Conversion Rate",
          desc: "Despite offering high-quality products, the brand had limited awareness among their target audience, making it difficult to drive traffic to their website and generate sales.",
        },
      ],
      solutions: [
        {
          title: "Social Media Advertising",
          desc: "Al-Muzzamil invested in targeted advertising campaigns across platforms like Facebook, Instagram, and Twitter. By utilizing advanced demographic and interest-based targeting, the ads reached a highly relevant audience, maximizing conversion potential.",
        },
        {
          title: "Engaging Content Creation",
          desc: "Recognizing the power of storytelling in building brand affinity, the marketing team produced captivating content that highlighted the craftsmanship behind each fragrance, the inspiration behind its creation, and the emotions it evoked. This content was disseminated through blog posts, videos, and visually stunning social media posts.",
        },
      ],
      analytics: [
        {
          id: 1,
          src: img1,
        },
        {
          id: 2,
          src: img2,
        },
        {
          id: 3,
          src: img3,
        },
        {
          id: 4,
          src: img4,
        },
        {
          id: 5,
          src: img5,
        },
      ],
      conclusion:
        "In an industry driven by sensory experiences and emotional connections, Al-Muzzamil has emerged as a shining example of how strategic marketing and customer-centricity can propel a brand to success. By harnessing the power of social media, compelling storytelling, and personalized engagement, Al-Muzzamil has not only carved a niche for itself but has also set new standards for excellence in the perfume industry. With a steadfast commitment to innovation and customer satisfaction, Al-Muzzamil is poised to continue its journey towards becoming a global fragrance powerhouse.",
      social: "https://www.instagram.com/almujammilfregrance/",
    },
    {},
  ];

  const id = router.query;

  const filteredData = data.filter((item) => item.id !== id);

  return (
    <div className="p-4 lg:p-10">
      <div className="rounded-lg ">
        <div className="flex justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[50px] cursor-pointer"
              onClick={() => router.back()}
            >
              <path
                d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                fill-rule="nonzero"
              />
            </svg>
            <p className="text-2xl sm:text-4xl md:text-6xl text-black">
              {filteredData[0]?.name}
            </p>
          </div>
          <a href={filteredData[0]?.social} target="__blank">
            <img src={instagram.src} className="w-[30px]" />
          </a>
        </div>
        <img
          src={filteredData[0]?.img}
          className="h-[500px] mt-6 rounded-xl object-cover w-full"
        />
      </div>
      <p className="text-2xl mt-10 text-black">Introduction</p>
      <p className="text-gray-500 font-mono mt-4 w-full md:w-[80%]">
        {filteredData[0]?.intro}
      </p>
      <div>
        <p className="text-2xl mt-10 text-black">Challenges</p>
        <div class="flex flex-col md:flex-row flex-wrap mt-4 gap-4">
          {filteredData[0]?.challenges?.map((item, index) => (
            <div class=" w-full md:w-1/3">
              <p class="text-xl text-black">{item?.title}</p>
              <p class="text-gray-500 mt-4 font-mono">{item?.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="flex  text-2xl mt-10 text-black">Solutions</p>
        {filteredData[0]?.solutions?.map((item, index) => (
          <div className="mt-4 flex">
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item?.title}
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                {item?.desc}
              </p>
            </a>
          </div>
        ))}
      </div>
      <div>
        <p className="text-2xl mt-10 text-black">Results</p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2  gap-4 mt-4">
          {filteredData[0]?.analytics?.map((item, index) => (
            <div key={index} className="w-full mb-4">
              <img src={item?.src.src} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-2xl mt-10 text-black">Conclusion</p>
        <div className=" gap-4 mt-4">
          <p className="text-black font-mono">{filteredData[0]?.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
