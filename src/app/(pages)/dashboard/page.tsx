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
          <>
            <Button props={{ onClick: () => {} }}>New</Button>
            <Button props={{ onClick: () => router.push("/profile") }}>
              Profile
            </Button>
          </>
        }
      />
      <main className="p-7 pt-20 min-h-screen transition-all bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary">
        <div className="container mx-auto">Dashboard</div>
      </main>
    </>
  );
}

export default Dashboard;
