"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();

  return (
    <>
      <Header
        items={
          <Button props={{ onClick: () => router.push("/profile") }}>
            Profile
          </Button>
        }
      />
      <main className="p-4 pt-20 min-h-screen bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary">
        Dashboard
      </main>
    </>
  );
}

export default Dashboard;
