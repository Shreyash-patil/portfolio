// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="mt-20">
//       <div className="text-center">
//         <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />

//         <div className="flex items-center w-max gap-2 mx-auto">
//           <Image src={assets.mail_icon} alt="logo" className="w-6 " />
//           shreyash.patil.work@gmail.com
//         </div>
//       </div>

//       <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
//         <p>© {new Date().getFullYear()} Shreyash Patil. All rights reserved.</p>
//         <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
//           <li>
//             <a target="_blank" href="https://github.com/Shreyash-patil">
//               Github
//             </a>
//             <a
//               target="_blank"
//               href="https://www.linkedin.com/in/shreyash-patil-56a282204/"
//             >
//               LinkdIn
//             </a>
//             <a target="_blank" href="https://www.instagram.com/_shreyash__pat1l/">
//               Instagram
//             </a> 
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 ">
      <div className="text-center py-10">
        {/* Logo */}
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-4" />

        {/* Email */}
        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-600">
          <Image src={assets.mail_icon} alt="mail" className="w-6" />
          <a
            href="mailto:shreyash.patil.work@gmail.com"
            className="hover:text-pink-500 transition-colors"
          >
            shreyash.patil.work@gmail.com
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mx-[8%]"></div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-[8%] py-6 text-center sm:text-left">
        {/* Copyright */}
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Shreyash Patil</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <ul className="flex items-center justify-center gap-6 mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shreyash-patil"
              className="hover:text-gray-900 dark:hover:text-gray-400 transition-colors"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/shreyash-patil-56a282204/"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/_shreyash__pat1l/"
              className="hover:text-pink-500 transition-colors"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
