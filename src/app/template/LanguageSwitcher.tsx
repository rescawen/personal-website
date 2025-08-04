"use client";

import { useState, ChangeEvent } from "react";
import { changeLanguage } from "./functions";

interface LanguageSwitcherProps {
  currentLang: string;
}

export default function LanguageSwitcher(currentLang: LanguageSwitcherProps) {
  const [lang, setLang] = useState(currentLang.currentLang); // Always starts as "en"

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);

    // Handle URL navigation on client side
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|fi)/, "");
    const newPath = `/${newLang}${pathWithoutLang}`;

    // Update the session on server
    await changeLanguage(newLang);

    // Navigate to new URL
    window.location.href = newPath;
  };

  return (
    <select value={lang} onChange={handleChange} className="rounded p-1">
      <option value="en">English</option>
      <option value="fi">Suomi</option>
    </select>
  );
}
