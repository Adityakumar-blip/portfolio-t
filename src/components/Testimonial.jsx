import { useRouter } from "next/router";
import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";

import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";

import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";

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
        {
          id: 6,
          src: img8,
        },
        {
          id: 7,
          src: img9,
        },
        {
          id: 8,
          src: img10,
        },
      ],
      gallery: [
        {
          id: 1,
          src: "https://instagram.famd5-4.fna.fbcdn.net/v/t39.30808-6/434685127_336017059462943_7708122091642752127_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNTAweDE4NzUuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.famd5-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=4QJFe5vOnCwQ7kNvgHQKSuO&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYCBRMO5QrMPSrNDYGnKAUojEiWaZtas0ZQAq2Kj5R1zdA&oe=664A4260&_nc_sid=cf751b",
        },
        {
          id: 2,
          src: "https://instagram.famd5-3.fna.fbcdn.net/v/t39.30808-6/434660019_332599949804654_1036093643669645088_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjgweDE2MDAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.famd5-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=I9YP44OpiSQQ7kNvgFcf_w5&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYB9UYxjSWwdJlDXwUd0HV7HXQzJ6Q55v04SyT0Nb6Vymg&oe=664A48B6&_nc_sid=cf751b",
        },
        {
          id: 3,
          src: "https://instagram.famd5-3.fna.fbcdn.net/v/t39.30808-6/433016845_332598536471462_2362367706943557693_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjgweDE2MDAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.famd5-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=uqla_iS72kwQ7kNvgHWBCRd&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYCIQl5tVE5WgV-hUyqt2t0WGamdnJFjUN0yj-1moHHDnw&oe=664A3945&_nc_sid=cf751b",
        },
      ],
      conclusion:
        "In an industry driven by sensory experiences and emotional connections, Al-Muzzamil has emerged as a shining example of how strategic marketing and customer-centricity can propel a brand to success. By harnessing the power of social media, compelling storytelling, and personalized engagement, Al-Muzzamil has not only carved a niche for itself but has also set new standards for excellence in the perfume industry. With a steadfast commitment to innovation and customer satisfaction, Al-Muzzamil is poised to continue its journey towards becoming a global fragrance powerhouse.",
      social: "https://www.instagram.com/almujammilfregrance/",
    },
    {
      id: 2,
      name: "Brand Buzzar - Digital Marketing Agency",
      img: "https://img.freepik.com/free-vector/digital-marketing-concept-with-online-advertising-media-symbols-flat_1284-31958.jpg?size=626&ext=jpg&ga=GA1.1.128595269.1715744696&semt=ais_user",
      intro:
        "Brand Buzzar, a dynamic digital marketing agency, is dedicated to helping brands amplify their online presence and drive meaningful engagement. With a team of creative strategists and digital experts, Brand Buzzar offers a comprehensive suite of services tailored to meet the diverse needs of clients across industries. Despite its expertise, Brand Buzzar faced challenges in positioning itself as a top-tier agency and attracting clients in a crowded marketplace.",
      challenges: [
        {
          title: "Establishing Credibility",
          desc: "In a competitive landscape dominated by established agencies, Brand Buzzar struggled to establish credibility and differentiate its offerings, hindering its ability to attract high-value clients.",
        },
        {
          title: "Generating Leads",
          desc: "With limited brand visibility, Brand Buzzar found it challenging to generate qualified leads and expand its client base, resulting in slower than anticipated growth.",
        },
      ],
      solutions: [
        {
          title: "Strategic Brand Promotion",
          desc: "To address the challenges, Brand Buzzar embarked on a strategic brand promotion campaign leveraging multiple digital channels. Through targeted email marketing, content marketing, and SEO optimization, Brand Buzzar aimed to increase its visibility among potential clients and position itself as a trusted authority in the digital marketing space.",
        },
        {
          title: "Social Media Advertising",
          desc: "In addition to brand promotion, Brand Buzzar ran targeted social media advertising campaigns across platforms such as LinkedIn, Twitter, and Facebook. These campaigns showcased the agency's expertise and highlighted successful case studies, driving traffic to the website and generating qualified leads.",
        },
      ],
      analytics: [
        {
          id: 1,
          src: img11,
        },
        {
          id: 2,
          src: img12,
        },
      ],
      gallery: [
        {
          id: 1,
          src: "https://instagram.famd5-2.fna.fbcdn.net/v/t39.30808-6/439221086_851781976964556_5994569231666119844_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNTAweDE1MDAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.famd5-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=38j1zLpPyjMQ7kNvgFBamll&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYAoGO_2KKEtL90M9n9Dki9EG_Ph6AJ1DVVNL0ISPlbMbQ&oe=664A2C67&_nc_sid=cf751b",
        },
        {
          id: 2,
          src: "https://instagram.famd5-3.fna.fbcdn.net/v/t39.30808-6/439437510_851780240298063_619272067994857398_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNTAweDE1MDAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.famd5-3.fna.fbcdn.net&_nc_cat=103&_nc_ohc=s8xV-K6FQloQ7kNvgEBLXun&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYAred-hYetBeElc3o0BOljcnxcKSvu0AVEAebYoVAl3wg&oe=664A4451&_nc_sid=cf751b",
        },
      ],
      conclusion:
        "Through its strategic brand promotion and social media advertising efforts, Brand Buzzar successfully enhanced its credibility and expanded its client base. By showcasing its expertise and delivering tangible results, Brand Buzzar has positioned itself as a go-to partner for brands seeking innovative digital marketing solutions. With a focus on driving client success and fostering long-term partnerships, Brand Buzzar is poised for continued growth and industry leadership.",
      social: "https://www.instagram.com/brand_buzzar/",
    },
    {
      id: 3,
      name: "SolutionOne ERP",
      img: "https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149373210.jpg?size=626&ext=jpg&ga=GA1.1.128595269.1715744696&semt=sph",
      intro:
        "SolutionOne ERP, a comprehensive enterprise resource planning solution, has revolutionized the way businesses manage their operations. With its suite of integrated modules spanning from finance to human resources, SolutionOne ERP offers unparalleled efficiency and agility to organizations of all sizes. Despite its robust features, SolutionOne ERP faced challenges in reaching its target audience and maximizing its market potential.",
      challenges: [
        {
          title: "Limited Market Penetration",
          desc: "Despite its advanced features, SolutionOne ERP struggled to penetrate new markets and gain traction among its target audience, leading to slower than anticipated growth.",
        },
        {
          title: "Competitive Landscape",
          desc: "In a crowded market dominated by established players, SolutionOne ERP faced stiff competition, making it challenging to differentiate its offerings and capture market share.",
        },
      ],
      gallery: [],
      solutions: [
        {
          title: "Strategic Social Media Campaigns",
          desc: "To address the challenges, SolutionOne ERP launched strategic social media campaigns across platforms like LinkedIn, Twitter, and industry-specific forums. These campaigns focused on highlighting the unique features and benefits of SolutionOne ERP, targeting key decision-makers and influencers within the target market.",
        },
        {
          title: "Educational Content Creation",
          desc: "Recognizing the need to educate potential customers about the value proposition of SolutionOne ERP, the marketing team developed educational content such as whitepapers, case studies, and how-to guides. This content positioned SolutionOne ERP as a thought leader in the ERP space and helped address common pain points faced by businesses.",
        },
      ],
      analytics: [
        {
          id: 1,
          src: img6,
        },
        {
          id: 2,
          src: img7,
        },
      ],
      conclusion:
        "Through targeted social media campaigns and educational content creation, SolutionOne ERP was able to overcome its initial challenges and gain significant traction in the market. By positioning itself as a valuable solution for businesses seeking efficiency and agility, SolutionOne ERP has established itself as a leader in the ERP space. With a continued focus on innovation and customer satisfaction, SolutionOne ERP is poised for sustained growth and success in the ever-evolving business landscape.",
      social: "https://www.instagram.com/solutiononeerp/",
    },
    ,
  ];

  const { id } = router.query;

  const filteredData = data.filter((item) => item.id === parseInt(id));

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
              <p class="font-normal font-mono text-gray-700 dark:text-gray-400">
                {item?.desc}
              </p>
            </a>
          </div>
        ))}
      </div>
      <div>
        <p className="text-2xl mt-10 text-black">Gallery</p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2  gap-4 mt-4">
          {filteredData[0]?.gallery.length > 0 ? (
            filteredData[0]?.gallery?.map((item, index) => (
              <div key={index} className="w-full mb-4">
                <img
                  src={item?.src}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-500 font-mono">
              No Images Available
            </p>
          )}
        </div>
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
