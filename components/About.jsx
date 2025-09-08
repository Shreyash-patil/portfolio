import React from "react";
import Image from "next/image";
import { assets, infoList } from "@/assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-serif"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-serif"
      >
        About me
      </motion.h2>

      {/* about me parent container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col w-full lg:flex-row items-center gap-20 my-20"
      >
        {/* image div */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        {/* info div */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <motion.p className="text-base md:text-lg text-gray-700 font-serif leading-relaxed max-w-3xl mb-6">
            I’m an aspiring Full-Stack Web Developer and MCA student from
            Solapur. I’ve completed 1-month internships in Web Development and
            Python Development, and participated in a Deloitte job simulation —
            gaining hands-on experience in feature development, debugging, and
            professional workflows. I build production-ready apps using Next.js,
            React, Node and MongoDB (examples: <strong>NeoVerse.ai</strong>,{" "}
            <strong>EchoChat</strong>, <strong>Amazon-clone</strong>).{" "}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                initial={{ opacity: 0, }}
                whileInView={{ opacity:1}}
                transition={{ duration: 0.6,delay:0.5 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer shadow-sm hover:bg-[#fcf4ff] hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <motion.h3 className="my-4 font-semibold text-gray-700">
                  {title}
                </motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  {description}
                </motion.p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
