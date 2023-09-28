"use client";
import { useTheme, useThemeUpdate } from "@/contexts/ThemeProvider";
import Image from "next/image";

function ThemeButton() {
  const dark = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <button onClick={toggleTheme}>
      <Image
        src={dark ? "/assets/sun.svg" : "/assets/moon.svg"}
        width={30}
        height={30}
        alt="Toggle theme"
        className="dark:invert transition-all"
      />
    </button>
  );
}

export default ThemeButton;
