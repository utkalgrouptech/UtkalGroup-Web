"use client";

import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ClearIcon from "@mui/icons-material/Clear";
import { Collapse } from "@mui/material";
import { useRouter } from "next/router";
import { navArr } from "../utils/Home/index";
import { logo } from "@/assests/Home";
import Link from "next/link";
import Image from "next/image";

export default function ResponsiveNaveBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const router = useRouter();

  const handleSubMenuClick = (id: number) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  return (
    <section className="w-full bg-white lg:hidden sticky top-0 z-50 shadow-md border-b">
      
      {/* TOP ROW */}
      <div className="w-full px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            height={26}
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* Hamburger Icon */}
        {!isOpen ? (
          <AppsIcon
            onClick={() => setIsOpen(true)}
            className="!text-black cursor-pointer"
            fontSize="large"
          />
        ) : (
          <ClearIcon
            onClick={() => setIsOpen(false)}
            className="!text-black cursor-pointer"
            fontSize="large"
          />
        )}
      </div>

      {/* MOBILE MENU */}
      <Collapse in={isOpen} timeout={350} unmountOnExit>
        <div className="w-full bg-[#0c0f17] text-white min-h-screen pb-10 overflow-y-auto">
          
          {/* Existing nav items */}
          {navArr.map((item) => (
            <div key={item.id} className="w-full">
              
              {/* MENU ITEM */}
              <div
                className="w-full px-4 py-4 border-b border-gray-700 flex items-center justify-between text-white cursor-pointer active:bg-gray-800"
                onClick={() => {
                  if (item.path) {
                    router.push(item.path);
                    setIsOpen(false);
                  } else {
                    handleSubMenuClick(item.id);
                  }
                }}
              >
                <h1 className="text-lg font-semibold capitalize">
                  {item.title}
                </h1>
              </div>

              {/* SUBMENU */}
              {item?.subMenu && (
                <Collapse
                  in={openSubMenu === item.id}
                  timeout={350}
                  unmountOnExit
                >
                  <div className="ml-6 mt-2 mb-2 space-y-2">
                    {item.subMenu.map((sub: any) => (
                      <p
                        key={sub.id}
                        className="text-[15px] py-2 px-3 border-b border-gray-700 cursor-pointer active:bg-gray-900 rounded-md"
                        onClick={() => {
                          router.push(sub.path);
                          setIsOpen(false);
                        }}
                      >
                        {sub.title}
                      </p>
                    ))}
                  </div>
                </Collapse>
              )}
            </div>
          ))}

          {/* ----------------------------- */}
          {/* ADDING GALLERY */}
          {/* ----------------------------- */}
          <div
            className="w-full px-4 py-4 border-b border-gray-700 flex items-center justify-between text-white cursor-pointer active:bg-gray-800"
            onClick={() => {
              router.push("/gallery");
              setIsOpen(false);
            }}
          >
            <h1 className="text-lg font-semibold capitalize">Gallery</h1>
          </div>

          {/* ----------------------------- */}
          {/* ADDING CAREERS */}
          {/* ----------------------------- */}
          <div
            className="w-full px-4 py-4 border-b border-gray-700 flex items-center justify-between text-white cursor-pointer active:bg-gray-800"
            onClick={() => {
              router.push("/career");
              setIsOpen(false);
            }}
          >
            <h1 className="text-lg font-semibold capitalize">Careers</h1>
          </div>
        </div>
      </Collapse>
    </section>
  );
}
