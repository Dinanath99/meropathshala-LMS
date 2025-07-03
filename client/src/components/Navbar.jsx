import DarkMode from "@/DarkMode";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { Menu, School } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useState } from "react";

const Navbar = () => {
  const user = true;

    const [active, setActive] = useState("home");

  // Common props for all ScrollLinks
  const commonProps = {
    smooth: true,
    duration: 300,
    offset: -64,
    spy: true,
    onSetActive: (to) => setActive(to),
    className: "relative group cursor-pointer",
  };

  return (
    <div className="h-16 dard:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-20">
      {/* desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2 px-4">
          <School size={"30"} />
          <h1 className="hidden md:block font-extrabold text-2xl ">Learn-X</h1>
        </div>

        {/* Naigation */}

       <nav className="flex items-center justify-center gap-6 text-xl font-medium text-black dark:text-gray-300">
      <ScrollLink
        to="home"
        {...commonProps}
        className={`relative group cursor-pointer ${
          active === "home" ? "active-link" : ""
        }`}
      >
        <span className="transition-colors duration-300 group-hover:text-gray-500">Home</span>
        <span className="absolute left-0 -bottom-1 h-[2px] bg-gray-500 transition-all duration-300 w-0 group-hover:w-full group-[.active-link]:w-full"></span>
      </ScrollLink>

      <ScrollLink
        to="courses"
        {...commonProps}
        className={`relative group cursor-pointer ${
          active === "courses" ? "active-link" : ""
        }`}
      >
        <span className="transition-colors duration-300 group-hover:text-gray-500">Courses</span>
        <span className="absolute left-0 -bottom-1 h-[2px] bg-gray-500 transition-all duration-300 w-0 group-hover:w-full group-[.active-link]:w-full"></span>
      </ScrollLink>

      <ScrollLink
        to="about"
        {...commonProps}
        className={`relative group cursor-pointer ${
          active === "about" ? "active-link" : ""
        }`}
      >
        <span className="transition-colors duration-300 group-hover:text-gray-500">About Us</span>
        <span className="absolute left-0 -bottom-1 h-[2px] bg-gray-500 transition-all duration-300 w-0 group-hover:w-full group-[.active-link]:w-full"></span>
      </ScrollLink>

      <ScrollLink
        to="recommendation"
        {...commonProps}
        className={`relative group cursor-pointer ${
          active === "recommendation" ? "active-link" : ""
        }`}
      >
        <span className="transition-colors duration-300 group-hover:text-gray-500">Recommendation</span>
        <span className="absolute left-0 -bottom-1 h-[2px] bg-gray-500 transition-all duration-300 w-0 group-hover:w-full group-[.active-link]:w-full"></span>
      </ScrollLink>
    </nav>





        {/* User icons and dark mode icon */}
        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/71966035?v=4"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="my-learning">My learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>

                    <Link to="profile">Edit Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>
              <Button>Signup</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* Mobile Device */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <h1 className="font-extrabold text-2xl">Learn-X</h1>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const role = "instructor";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full bg-gray-200 hover:bg-gray-200"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>E-Learning</SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator />
        <nav className="flex flex-col space-y-4">
          <span>My Learning</span>
          <span>Edit Profile</span>
          <p>Log out</p>
        </nav>
        {role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Dashboard</Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
