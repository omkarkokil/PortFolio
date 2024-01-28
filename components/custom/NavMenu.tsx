import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home } from "lucide-react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
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
          <Home className="mr-2 h-4 w-4" />
          <span>Home</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="pr-20">
          <TbListDetails className="mr-2 h-4 w-4" />
          <span>About</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PiProjectorScreenChart className="mr-2 h-4 w-4" />
          <span>Project</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IoIosContact className="mr-2 h-4 w-4" />
          <span>Contact us</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <HiMenuAlt3 className="hover:text-gray-400" size={20} />
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56 dark:!bg-white">
    //     <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuGroup>
    //       <DropdownMenuItem>
    //         <User className="mr-2 h-4 w-4" />
    //         <span>Profile</span>
    //         <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //     </DropdownMenuGroup>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem>
    //       <Github className="mr-2 h-4 w-4" />
    //       <span>GitHub</span>
    //     </DropdownMenuItem>
    //     <DropdownMenuItem>
    //       <LifeBuoy className="mr-2 h-4 w-4" />
    //       <span>Support</span>
    //     </DropdownMenuItem>
    //     <DropdownMenuItem disabled>
    //       <Cloud className="mr-2 h-4 w-4" />
    //       <span>API</span>
    //     </DropdownMenuItem>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem>
    //       <LogOut className="mr-2 h-4 w-4" />
    //       <span>Log out</span>
    //       <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
};

export default NavMenu;
