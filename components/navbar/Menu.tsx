'use client';

import { navLink } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { MdOutlineMenu } from "react-icons/md"

const Menu = () => {
  return (
    <nav>
      <ul className="hidden md:flex flex-row gap-8 items-center justify-center">
        {navLink.map((link) => (
          <li key={link.name} >
            <Link
              href={link.to}
              className="
              font-light
              text-lg
              text-custom-black
              inline-block
              transition
              origin-[0]
              duration-500
              hover:-translate-y-1
              "
            >
              {link.name}
            </Link>
          </li>
        ))}
      

      <li>
        <Link
          className="
          font-light
          text-base
          cursor-pointer
          transition-all
          duration-500
          origin-right
          hover:text-accent-color-yellow
        "
          href="mailto:mohamedimran1130@gmail.com"
        >
          &#60; say hi - <span className="hidden lg:inline-block">mohamedimran1130@gmail.com</span> 
          <span className="inline-block lg:hidden">@</span>
          &nbsp; &#47; &#62;
        </Link>
      </li>

     
      </ul>
      
      <MdOutlineMenu size={36} className="block md:hidden" />
    </nav>
  );
};

export default Menu;
