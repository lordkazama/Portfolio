import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project6 from "../assets/images/project6.png";
import project5 from "../assets/images/project5.png";
import project4 from "../assets/images/project4.png";

// import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project6,
      name: "Text Utils",
      github_link: "https://github.com/lordkazama/Textutil.git",
      
    },
    {
      img: project1,
      name: "News App",
      github_link: "https://github.com/lordkazama/newsapp.git",
      
    },
    {
      img: project2,
      name: "Travel list planner App",
      github_link: "https://github.com/lordkazama/travel_list_planner.git",
      
    },
    {
      img: project3,
      name: "Online Notebook",
      github_link: "https://github.com/lordkazama/onlineNotebook.git",
      
    },
   
    {
      img: project4,
      name: "Movie app",
      github_link:
        "https://github.com/lordkazama/moviewatchlist.git",
    },
    {
      img: project5,
      name: "Portfolio",
      github_link:
        "https://github.com/lordkazama/portfolio.git",
    },
    
  ];
  return (
    <section id="projects" className="py-10 text-white ">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-15xl gap-6 px-5 mx-auto items-center relative ">
        <div className="lg:w-2/3 w-full mx-auto  ">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    {/* <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
