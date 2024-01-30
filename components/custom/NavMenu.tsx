import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home } from "lucide-react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { PiProjectorScreenChart } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";

const NavMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none border-none">
        <HiMenuAlt3
          className="hover:text-gray-400 outline-none border-none"
          size={20}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="pr-40">
          <Link className="flex items-center gap-2" href={"#start"}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="pr-20">
          <Link className="flex items-center gap-2" href={"#about"}>
            <TbListDetails className="mr-2 h-4 w-4" />
            <span>About</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex items-center gap-2" href={"#project"}>
            <PiProjectorScreenChart className="mr-2 h-4 w-4" />
            <span>Project</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex items-center gap-2" href={"#contact"}>
            <IoIosContact className="mr-2 h-4 w-4" />
            <span>Contact us</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="md:hidden block" />
        <DropdownMenuItem className="md:hidden block">
          <Link className="flex items-center gap-2" href={"#contact"}>
            <LuGithub className="mr-2 h-4 w-4" />
            <span>Github</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="md:hidden block">
          <Link
            className=" md:hidden flex items-center gap-2"
            href={"#contact"}
          >
            <FaLinkedinIn className="mr-2 h-4 w-4" />
            <span>Linked In</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenu;
