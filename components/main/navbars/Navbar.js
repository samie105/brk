"use client";
import { useEffect, useState } from "react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../../../@/components/ui/sheet";

export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 100; // Adjust this value to set the scroll threshold for changing the background color

      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`nav-container flex justify-between duration-300 items-center py-6 px-10 transition-colors ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="logo-area">
          <h2 className="font-bold text-base">Broker Logo Name</h2>
        </div>
        <div className="Navigation-Items">
          <div className="itemcontainer lg:flex hidden">
            <div
              className={`text-sm ${
                activeNavItem === "Home" ? "font-bold" : "font-medium"
              } px-5 cursor-pointer transition-opacity duration-500 ${
                activeNavItem !== "Home" ? "opacity-70 hover:opacity-100" : ""
              }`}
              onClick={() => handleNavItemClick("Home")}
            >
              Home
            </div>
            <div
              className={`text-sm ${
                activeNavItem === "How It Works" ? "font-bold" : "font-medium"
              } px-5 cursor-pointer transition-opacity duration-500 ${
                activeNavItem !== "How It Works"
                  ? "opacity-70 hover:opacity-100"
                  : ""
              }`}
              onClick={() => handleNavItemClick("How It Works")}
            >
              How It Works
            </div>
            <div
              className={`text-sm ${
                activeNavItem === "About" ? "font-bold" : "font-medium"
              } px-5 cursor-pointer transition-opacity duration-500 ${
                activeNavItem !== "About" ? "opacity-70 hover:opacity-100" : ""
              }`}
              onClick={() => handleNavItemClick("About")}
            >
              About
            </div>
            <div
              className={`text-sm ${
                activeNavItem === "Testimonials" ? "font-bold" : "font-medium"
              } px-5 cursor-pointer transition-opacity duration-500 ${
                activeNavItem !== "Testimonials"
                  ? "opacity-70 hover:opacity-100"
                  : ""
              }`}
              onClick={() => handleNavItemClick("Testimonials")}
            >
              Testimonials
            </div>
            <div
              className={`text-sm ${
                activeNavItem === "Pricing" ? "font-bold" : "font-medium"
              } px-5 cursor-pointer transition-opacity duration-500 ${
                activeNavItem !== "Pricing"
                  ? "opacity-70 hover:opacity-100"
                  : ""
              }`}
              onClick={() => handleNavItemClick("Pricing")}
            >
              Pricing
            </div>
            <div
              className={`text-sm ${
                activeNavItem === "Contact Us" ? "font-bold" : "font-medium"
              } px-5 cursor-pointer transition-opacity duration-500 ${
                activeNavItem !== "Contact Us"
                  ? "opacity-70 hover:opacity-100"
                  : ""
              }`}
              onClick={() => handleNavItemClick("Contact Us")}
            >
              Contact Us
            </div>
          </div>
        </div>
        <div className="ctaButtons lg:flex justify-between text-sm font-bold hidden">
          <div
            className="btn1 px-4 cursor-pointer flex py-3 rounded-full"
            style={{ backgroundColor: "#ffffff10" }}
          >
            <p className="px-0.5 opacity-90">Get Started</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>{" "}
        <div className="menu-bar cursor-pointer lg:hidden">
          <Sheet className="">
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Broker Name</SheetTitle>
              </SheetHeader>
              <div className="nav-menus mt-10 flex-col flex">
                <SheetClose>
                  <div
                    className={`menu-item font-semibold mb-1 py-4 opacity-40 hover:opacity-90 duration-200 cursor-pointer hover:bg-gray-100 px-3 rounded-md flex items-center ${
                      activeNavItem === "Home" ? "active" : ""
                    }`}
                    onClick={() => handleNavItemClick("Home")}
                  >
                    <p>Home</p>
                  </div>
                </SheetClose>
                <SheetClose>
                  <div
                    className={`menu-item font-semibold mb-1 py-4 opacity-40 hover:opacity-90 duration-200 cursor-pointer hover:bg-gray-100 px-3 rounded-md flex items-center ${
                      activeNavItem === "How It Works" ? "active" : ""
                    }`}
                    onClick={() => handleNavItemClick("How It Works")}
                  >
                    <p>How It Works</p>
                  </div>
                </SheetClose>
                <SheetClose>
                  <div
                    className={`menu-item font-semibold mb-1 py-4 opacity-40 hover:opacity-90 duration-200 cursor-pointer hover:bg-gray-100 px-3 rounded-md flex items-center ${
                      activeNavItem === "About" ? "active" : ""
                    }`}
                    onClick={() => handleNavItemClick("About")}
                  >
                    <p>About</p>
                  </div>
                </SheetClose>
                <SheetClose>
                  <div
                    className={`menu-item font-semibold mb-1 py-4 opacity-40 hover:opacity-90 duration-200 cursor-pointer hover:bg-gray-100 px-3 rounded-md flex items-center ${
                      activeNavItem === "Testimonials" ? "active" : ""
                    }`}
                    onClick={() => handleNavItemClick("Testimonials")}
                  >
                    <p>Testimonials</p>
                  </div>
                </SheetClose>
              </div>

              <div className="cta-button mt-12 flex items-center px-5 cursor-pointer w-full absolute bottom-5">
                <div className="btn flex items-center w-[30%] bg-gray-200 py-3 px-4 rounded-md">
                  <p className="mr-2 font-bold">Login</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="cta-button flex ml-6 font-bold items-center">
                  <p className="pr-1">Create New Acount</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
