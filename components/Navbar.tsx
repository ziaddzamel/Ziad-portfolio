"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center z-20 top-0 py-5 bg-primary fixed">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link className="flex items-center gap-2" href={"/"}>
          <Image
            src={"logo.svg"}
            alt="logo"
            width={36}
            height={36}
            className=" object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Ziad | <span>Zamel</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`${
                active === link.title ? " text-white" : " text-secondary"
              }
          hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className=" sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            width={28}
            height={28}
            onClick={() => setToggle(!toggle)}
            className="object-contain cursor-pointer"
          />
          <div
            className={`${
              !toggle ? " hidden" : " flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  className={`${
                    active === link.title ? " text-white" : " text-secondary"
                  }
                  font-medium font-poppins cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
