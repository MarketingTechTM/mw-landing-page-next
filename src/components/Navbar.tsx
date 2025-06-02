"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Logo from "./ui/Logo";
import { CtaButton } from "./ui/button";
import { IconChevronDown, IconChevronUp, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion"; // Fixed import

const MenuItems = [
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Success Stories",
    link: "/customer-stories",
  },
  {
    title: "Resources",
    link: null,
    dropdownItems: [
      { title: "Books", link: "/books" },
      { title: "Podcast", link: "/podcasts" },
      { title: "Courses", link: "/courses" },
    ],
  },
];

const MobileNavBar = ({
  isMobileMenuActive,
  setIsMobileMenuActive,
}: {
  isMobileMenuActive: boolean;
  setIsMobileMenuActive: (active: boolean) => void;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isMobileMenuActive && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }} // Closing animation
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed top-0 left-0 h-screen w-3/4 sm:w-1/2 bg-black dark:bg-black
           shadow-lg z-[50] p-5 text-white"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-3">
            <Logo height={50} width={150} />
            <button onClick={() => setIsMobileMenuActive(false)}>
              <IconX
                className="text-white transition-colors duration-200"
                stroke={2}
              />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="mt-5 space-y-4 bg-black">
            {MenuItems.map((item) => (
              <div key={item.title} className="relative">
                {item.link ? (
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    <Link
                      href={item.link}
                      className="block px-4 py-2 text-lg hover:bg-gray-800 rounded-md transition"
                      onClick={() => setIsMobileMenuActive(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.title ? null : item.title
                        )
                      }
                      className="flex justify-between w-full px-4 py-2 text-lg hover:bg-gray-800 rounded-md transition"
                    >
                      {item.title}
                      <span>
                        {openDropdown === item.title ? (
                          <IconChevronUp stroke={2} />
                        ) : (
                          <IconChevronDown stroke={2} />
                        )}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="ml-6 space-y-2 mt-2"
                        >
                          {item.dropdownItems?.map((subItem) => (
                            <motion.div
                              key={subItem.title}
                              whileHover={{ x: 10 }}
                              transition={{ type: "spring", stiffness: 150 }}
                            >
                              <Link
                                href={subItem.link}
                                className="block px-4 py-2 text-sm bg-gray-900 hover:bg-gray-700 rounded-md transition"
                                onClick={() => setIsMobileMenuActive(false)}
                              >
                                {subItem.title}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export function NavbarDemo() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  return (
    <>
      <div className=" hidden lg:flex flex-row justify-between items-center dark:bg-black xl:px-10 px-0 py-6">
        <Logo height={300} width={250} href="/" />
        <div className="relative w-full flex items-center justify-between bg-black">
          <Navbar className="top-2" />
        </div>
        <CtaButton
          title="Book a strategy Call"
          url="/book-a-call"
          size="h-12 w-56"
          textSize="text-lg"
          className="font-bold w-"
        />
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex">
        <div className="flex flex-row justify-between items-center w-full px-5 py-3 dark:bg-black bg-slate-50">
          <Logo height={100} width={200} href="/" />

          <CtaButton
          title="Book a strategy Call"
          url="/book-a-call"
          size="h-12 w-52"
          textSize="text-lg"
          className="font-bold hidden sm:flex"
        />
          <div className="cursor-pointer" onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuActive ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </div>
        </div>

        {/* Backdrop and Mobile Nav */}
        {isMobileMenuActive && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40"
            onClick={() => setIsMobileMenuActive(false)}
          />
        )}
        <MobileNavBar
          isMobileMenuActive={isMobileMenuActive}
          setIsMobileMenuActive={setIsMobileMenuActive}
        />
      </div>
    </>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {MenuItems.map((menu) => (
          <MenuItem key={menu.title} setActive={setActive} active={active} item={menu.title} link={menu.link}>
            {menu.dropdownItems && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-4 text-sm"
              >
                {menu.dropdownItems.map((subItem) => (
                  <HoveredLink key={subItem.title} href={subItem.link}>
                    {subItem.title}
                  </HoveredLink>
                ))}
              </motion.div>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
