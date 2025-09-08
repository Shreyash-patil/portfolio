import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-serif"
      >
        What I built
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-serif"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-serif"
      >
        Explore the collection of projects show casing my expertise in
        Full-Stack Development.
      </motion.p>

      {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {workData.map((project, index) => (
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>

              <div>
                <Image src={assets.send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative  group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

            {/* Content Box */}
            <div className="bg-white w-11/12 mx-auto rounded-md absolute bottom-5 left-0 right-0 py-3 px-4 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="text-base font-semibold ">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>

                <p
                  className={`${
                    project.isLive
                      ? "text-red-600 text-xs  "
                      : "text-shadow-gray-600 text-xs "
                  }`}
                >
                  {project.isLive ? "LIVE" : "Not live"}
                </p>
              </div>

              <div className="ml-3 ">
                {project.isLive ? (
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-2 rounded-full bg-gray-100 hover:bg-black/10 hover:scale-110 hover:rotate-6 transition duration-300 ease-in-out"
                    >
                      <Image src={assets.github} alt="github" className="w-5" />
                    </a>

                    <a
                      className="p-2 rounded-full bg-gray-100 hover:bg-black/10 hover:scale-110 hover:rotate-6 transition duration-300 ease-in-out"
                      href={project.isLive ? project.live_link : project.github}
                      target="_blank"
                    >
                      <Image src={assets.send_icon} alt="" className="w-5" />
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-4">
                    <a
                      className="p-2 rounded-full bg-gray-100 hover:bg-black/10 hover:scale-110 hover:rotate-6 transition duration-300 ease-in-out"
                      href={project.github}
                      target="_blank"
                    >
                      <Image src={assets.github} alt="github" className="w-5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{opacity: 0 }}
        whileInView={{  opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        href="https://github.com/Shreyash-patil"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-[#fcf4ff] hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
      >
        Show more <Image src={assets.right_arrow} alt="" className="w-4 " />
      </motion.a>
    </motion.div>
  );
};

export default Work;
