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
    fixed top-0 left-0 right-0 border-b border-b-dark-primary dark:border-b-light-primary"
    >
      <div
        className="container mx-auto px-5 py-1 
      flex items-center justify-between"
      >
        <Link href="/dashboard" className="text-4xl hover:underline">
          Notes
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
