"use client";

import { useState, ChangeEvent, useRef } from "react";
import { changeLanguage } from "./functions";

interface LanguageSwitcherProps {
  currentLang: string;
}

export default function LanguageSwitcher(currentLang: LanguageSwitcherProps) {
  const [lang, setLang] = useState(currentLang.currentLang);
  const hiddenLinkRef = useRef<HTMLAnchorElement>(null);

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);

    // Handle URL navigation on client side
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|fi)/, "");
    const newPath = `/${newLang}${pathWithoutLang}`;

    // Update the session on server
    await changeLanguage(newLang);

    // Use hidden link for client-side navigation
    if (hiddenLinkRef.current) {
      hiddenLinkRef.current.href = newPath;
      hiddenLinkRef.current.click();
    }
  };

  return (
    <>
      <select value={lang} onChange={handleChange} className="rounded p-1">
        <option value="en">English</option>
        <option value="fi">Suomi</option>
      </select>
      {/* Hidden link for rwsdk client-side navigation */}
      <a ref={hiddenLinkRef} href="#" style={{ display: "none" }} />
    </>
  );
}
