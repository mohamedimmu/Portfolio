"use client";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const linkData = [
    {
      name: "LinkedIn",
      to: "https://www.linkedin.com/in/mohamed-imran-2495951a2",
      icon: <FaLinkedinIn size={24} />,
    },
    {
      name: "Github",
      to: "https://github.com/mohamedimmu",
      icon: <FaGithub size={24} />,
    },
    {
      name: "Instagram",
      to: "https://www.instagram.com/_mohamedimran_",
      icon: <FaInstagram size={24} />,
    },
  ];
  return (
    <div className="flex flex-row gap-4 ">
      {linkData.map((link) => (
        <i
          key={link.name}
          className="
            p-3 
            border
            border-solid 
            border-neutral-400
            shadow-sm
            rounded-full
            text-center
            transition
            duration-500
            hover:-translate-y-1
            hover:bg-black 
            hover:text-white
            cursor-pointer"
        >
          {link.icon}
        </i>
      ))}
    </div>
  );
};

export default SocialLinks;
