"use client";
import ThemeButton from "./ThemeButton";
import Link from "next/link";

type HeaderPropsType = {
  items?: React.ReactNode;
};

function Header({ items = <></> }: HeaderPropsType) {
  return (
    <div
      className="transition-all bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary
    fixed top-0 left-0 right-0 border-b border-b-zinc-500 z-10"
    >
      <div
        className="container mx-auto px-11 py-2 
      flex items-center justify-between"
      >
        <Link href="/home" className="text-4xl hover:underline">
          DeNotes
        </Link>
        <div className="flex justify-center items-center gap-3">
          {items}
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
