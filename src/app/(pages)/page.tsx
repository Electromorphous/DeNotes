"use client";
import ThemeButton from "@/components/ThemeButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center text-center min-h-screen bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary">
      <div className="absolute top-7 right-7 flex gap-7">
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <ThemeButton />
      </div>
      <div className="-mt-12">
        <h1 className="text-6xl mb-4">DeNotes</h1>
        <p className="text-lg">
          The world's first fully decentralised note-taking app
          <br />
          powered by the{" "}
          <Link className="underline" href="https://ipfs.io" target="_blank">
            Interplanetary File System
          </Link>
        </p>

        {/* <h1 className="text-6xl mb-4">Notes</h1>
        <p className="text-xl">Take meaningful notes</p> */}
      </div>
    </main>
  );
}
