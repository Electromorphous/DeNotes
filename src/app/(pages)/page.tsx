"use client";
import ToggleTheme from "@/components/ThemeButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center text-center min-h-screen bg-zinc-200 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-200">
      <div className="absolute top-7 right-7 flex gap-7">
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <ToggleTheme />
      </div>
      <div className="-mt-12">
        {/* <h1 className="text-6xl mb-4">DeNotes</h1>
        <p className="text-lg">
          The world's first fully decentralised note-taking app
          <br />
          powered by the{" "}
          <Link className="underline" href="https://ipfs.io" target="_blank">
            Interplanetary File System
          </Link>
        </p> */}

        <h1 className="text-6xl mb-4">Notes</h1>
        <p className="text-xl">Take meaningful notes</p>
      </div>
    </main>
  );
}
