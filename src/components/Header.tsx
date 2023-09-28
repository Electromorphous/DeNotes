"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ToggleTheme from "./ToggleTheme";

function Header() {
  return (
    <div className="flex items-center justify-between dark:bg-black dark:text-white">
      <h1 className="text-4xl">Notes</h1>
      <ToggleTheme />
    </div>
  );
}

export default Header;
