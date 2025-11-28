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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const router = useRouter();

  const handleSubMenuClick = (id: any) => {
    if (openSubMenu === id) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(id);
    }
  };

  return (
    <section className="w-full bg-white lg:hidden sticky top-0 z-50">
      <section className="w-full px-3 h-16 flex items-center justify-between">
        <div className="flex-grow">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              height={20}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        <div>
          {!isOpen ? (
            <AppsIcon
              onClick={() => setIsOpen(true)}
              className="!text-black cursor-pointer"
            />
          ) : (
            <ClearIcon
              className="!text-black cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </section>

      <section className="z-[999]">
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <div className="w-full h-full bg-gray-950 text-white">
            {navArr.map((item) => (
              <div key={item.id}>
                <div
                  className="w-full p-4 border border-gray-200 flex items-center justify-between text-white cursor-pointer"
                  onClick={() => {
                    if (item.path) {
                      router.push(item.path);
                    } else {
                      handleSubMenuClick(item.id);
                    }
                  }}
                >
                  <h1 className="text-md font-bold capitalize">{item.title}</h1>
                </div>

                {item.id && (
                  <Collapse
                    in={openSubMenu === item.id}
                    timeout="auto"
                    unmountOnExit
                  >
                    {/* Submenu content goes here if needed */}
                  </Collapse>
                )}
              </div>
            ))}
          </div>
        </Collapse>
      </section>
    </section>
  );
}
