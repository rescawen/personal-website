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
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-x-12">
              <span className="font-semibold text-lg">{currentLabel}</span>
              <button
                className="p-2"
                aria-label="Open menu"
                onClick={() => setMenuOpen((v) => !v)}
              >
                {/* Hamburger icon */}
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
            {/* Mobile horizontal line, longer */}
            <div className="relative mt-8 w-60 mx-auto flex justify-center">
              <div className="h-0.5 bg-black dark:bg-light-beige w-full"></div>
              <div className="absolute left-0 top-0 h-6 w-0.5 bg-black dark:bg-light-beige"></div>
              <div className="absolute right-0 top-0 h-6 w-0.5 bg-black dark:bg-light-beige"></div>
            </div>
            {/* Mobile dropdown menu */}
            {menuOpen && (
              <ul className="absolute top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-black shadow-lg rounded-lg py-2 z-50 w-48 border border-gray-200 dark:border-gray-700">
                {navLinks.map((link) => {
                  const isActive =
                    normalizePath(link.href) === normalizedCurrentPath;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          isActive
                            ? "font-bold underline underline-offset-4"
                            : ""
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
