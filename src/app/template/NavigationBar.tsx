"use client";

import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

interface NavigationBarProps {
  navLinks: NavLink[];
  currentPath: string;
}

export default function NavigationBar({
  navLinks,
  currentPath,
}: NavigationBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function normalizePath(path: string) {
    if (!path) return "/";
    if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
    return path;
  }

  const normalizedCurrentPath = normalizePath(currentPath);
  const currentLabel =
    navLinks.find((link) => normalizePath(link.href) === normalizedCurrentPath)
      ?.label ||
    navLinks[0]?.label ||
    "About Me";

  return (
    <>
      <nav className="mt-16 flex flex-col items-center w-full">
        {/* Desktop nav */}
        <ul className="hidden md:flex justify-center items-center space-x-16">
          {navLinks.map((link) => {
            const isActive = normalizePath(link.href) === normalizedCurrentPath;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-lg hover:underline underline-offset-4 ${
                    isActive
                      ? "font-bold text-orange-700 dark:text-amber-600"
                      : "font-semibold "
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        {/* Desktop horizontal line */}
        <div className="relative mt-4 w-[34rem] mx-auto justify-center hidden md:flex">
          <div className="h-0.5 bg-black dark:bg-light-beige w-full"></div>
          <div className="absolute left-0 top-0 h-6 w-0.5 bg-black dark:bg-light-beige"></div>
          <div className="absolute right-0 top-0 h-6 w-0.5 bg-black dark:bg-light-beige"></div>
        </div>

        {/* Mobile nav */}
        <div className="flex flex-col items-center w-full md:hidden mx-4">
          <div className="relative w-full flex justify-center">
            {/* Title and hamburger centered together above the line */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center w-56">
              <span
                className={`font-semibold text-lg transition-all duration-300 ml-16 ${
                  menuOpen ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                {currentLabel}
              </span>
              <button
                className="p-2 transition-transform duration-300 hover:scale-110 ml-auto"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((v) => !v)}
              >
                {/* Animated hamburger/close icon */}
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-all duration-300 ${
                    menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
                {/* Close icon */}
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                  }`}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {/* Mobile horizontal line, longer */}
            <div
              className={`relative mt-8 w-60 mx-auto flex justify-center transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="h-0.5 bg-black dark:bg-light-beige w-full"></div>
              <div className="absolute left-0 top-0 h-6 w-0.5 bg-black dark:bg-light-beige"></div>
              <div className="absolute right-0 top-0 h-6 w-0.5 bg-black dark:bg-light-beige"></div>
            </div>
          </div>
        </div>

        {/* Full-screen mobile overlay */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{
            top: "120px", // Position below the top bar
          }}
        >
          {/* Background with proper light/dark mode */}
          <div className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-md"></div>

          {/* Close button at top right */}
          <button
            className="absolute top-6 right-6 p-2 z-50 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div
            className={`relative h-full flex flex-col items-center justify-center transition-all duration-700 ease-out ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Navigation list */}
            <ul className="space-y-8 text-center">
              {navLinks.map((link, index) => {
                const isActive =
                  normalizePath(link.href) === normalizedCurrentPath;
                return (
                  <li key={link.href} className="overflow-hidden">
                    <a
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`block text-3xl transition-all duration-500 hover:scale-110 leading-relaxed py-0.5 ${
                        isActive
                          ? "text-black dark:text-white font-bold underline underline-offset-8"
                          : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
