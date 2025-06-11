"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Logo from "./ui/Logo";
import { CtaButton } from "./ui/button";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipe } from "@/hooks/useSwipe";
import { MobileNavBar } from "./MobileNavbar";

export const MenuItems = [
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
      { title: "Recommended Books", link: "/books" },
      { title: "Recommended Courses", link: "/courses" },
      { title: "Podcast", link: "/podcasts" },
      
    ],
  },
];

const DesktopNav = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {MenuItems.map((menu) => (
          <MenuItem
            key={menu.title}
            setActive={setActive}
            active={active}
            item={menu.title}
            link={menu.link}
          >
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
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useSwipe({
    onSwipeLeft: () => setMobileOpen(false),
    onSwipeRight: () => setMobileOpen(true),
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="hidden xl:flex flex-row justify-between items-center dark:bg-black xl:px-10 px-0 py-6">
        <Logo height={300} width={250} href="/" />
        <div className="relative w-full flex items-center justify-between bg-black">
          <DesktopNav className="top-2" />
        </div>
        <CtaButton
          title="Book a strategy Call"
          url="/book-a-call"
          size="h-12 w-56"
          textSize="text-lg"
          className="font-bold"
        />
      </div>

      <div className="xl:hidden flex">
        <div className="flex flex-row justify-between items-center w-full px-3 py-3 dark:bg-black bg-slate-50">
          <Logo height={100} width={200} href="/" />

          <div className="flex gap-10 justify-between items-center">
            <CtaButton
              title="Book a strategy Call"
              url="/book-a-call"
              size="h-12 w-56"
              textSize="text-lg"
              className="font-bold hidden sm:flex"
            />

            <div
              className="cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {!mobileOpen ? (
                <IconMenu2 stroke={2} color="white" height={32} width={32} />
              ) : (
                <IconX stroke={2} color="white" height={32} width={32} />
              )}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-40"
              onClick={() => setMobileOpen(false)}
            />// backdrop
          )}
          <MobileNavBar
            isMobileMenuActive={mobileOpen}
            setIsMobileMenuActive={setMobileOpen}
          />
        </AnimatePresence>
      </div>
    </>
  );
}
