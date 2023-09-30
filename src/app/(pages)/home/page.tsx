"use client";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import NoteDataType from "@/types/noteDataType";
import Modal from "@/components/Modal";

function Home() {
  const [modalOpen, setModalOpen] = useState(true);
  const [noteData, setNoteData] = useState<NoteDataType | null>(null);
  const router = useRouter();

  return (
    <>
      {modalOpen ? (
        <Modal
          noteData={noteData}
          setNoteData={setNoteData}
          handleClose={() => setModalOpen(false)}
          handleSave={() => {}}
          loading={false}
        />
      ) : (
        <></>
      )}
      <Header
        items={
          <>
            <Button props={{ onClick: () => setModalOpen(true) }}>New</Button>
            <Button props={{ onClick: () => router.push("/profile") }}>
              Profile
            </Button>
          </>
        }
      />
      <main className="p-7 pt-24 min-h-screen transition-all bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary">
        <div className="container mx-auto">Home</div>
      </main>
    </>
  );
}

export default Home;
