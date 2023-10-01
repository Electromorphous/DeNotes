import { useState, useEffect } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

const initNote = {
  title: "",
  content: "",
  createdAt: "",
  updatedAt: "",
};

function Home() {
  const [noteData, setNoteData] = useState<any>(initNote);
  const [modalOpen, setModalOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(noteData);

  const handleSave = async () => {};

  return (
    <>
      {modalOpen ? (
        <Modal
          noteData={noteData}
          setNoteData={setNoteData}
          handleClose={() => setModalOpen(false)}
          handleSave={handleSave}
          loading={loading}
        />
      ) : (
        <></>
      )}
      <Header
        items={
          <>
            <Button
              props={{
                onClick: () => {
                  setIsNew(true);
                  setModalOpen(true);
                },
              }}
            >
              New
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
