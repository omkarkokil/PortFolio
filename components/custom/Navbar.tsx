"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NextFont } from "next/dist/compiled/@next/font";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import NavMenu from "./NavMenu";

const Navbar = ({ font }: { font: NextFont }) => {
  const { setTheme } = useTheme();
  return (
    <nav className=" dark:bg-[#020817] bg-white flex fixed top-0 left-0 right-0 h-max items-center justify-center md:py-6 sm:py-4 py-2    px-8">
      <div className="lg:w-[60%] md:w-[70%] w-[90%] flex h-max items-center justify-between">
        <Button className="!p-0" variant="link">
          <Sun
            size={20}
            onClick={() => setTheme("dark")}
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            size={20}
            onClick={() => setTheme("light")}
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Link
          href={"/"}
          className={`${font.className} md:text-2xl sm:text-xl text-lg   font-bold `}
        >
          OK.dev
        </Link>

        <div className="flex gap-x-8 items-center">
          <Link
            className="md:flex hidden"
            href={"https://github.com/omkarkokil"}
          >
            <FaGithub className="hover:text-gray-400" size={20} />
          </Link>
          <Link
            className="hover:text-gray-400 md:flex hidden"
            href={"https://www.linkedin.com/in/omkar-kokil-384231285/"}
          >
            <FaLinkedin size={20} />
          </Link>
          <NavMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
