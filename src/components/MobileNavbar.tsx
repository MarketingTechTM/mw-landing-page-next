import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./ui/Logo";
import { IconChevronDown, IconChevronUp, IconX } from "@tabler/icons-react";
import { MenuItems } from "./Navbar";
import Link from "next/link";

export const MobileNavBar = ({
  isMobileMenuActive,
  setIsMobileMenuActive,
}: {
  isMobileMenuActive: boolean;
  setIsMobileMenuActive: (active: boolean) => void;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    
      <AnimatePresence>
        {
          isMobileMenuActive && (
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
      )
        }
      </AnimatePresence>
    
  );
};