import { useCallback, useEffect, useState } from "react";
import { useStorage } from "@thirdweb-dev/react";
import Button from "./components/Button";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import NoteType from "./types/NoteType";
import NoteCard from "./components/NoteCard";
import Background from "./components/Background";
import { useCookie } from "./contexts/CookieProvider";

const initNote = {
  cid: "",
  title: "",
  content: "",
  createdAt: "",
  updatedAt: "",
};

function Home() {
  const [noteData, setNoteData] = useState<NoteType>(initNote);
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [uris, setUris] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [noteIndex, setNoteIndex] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const storage = useStorage();
  const { cookies, updateCookie } = useCookie();

  useEffect(() => {
    if (cookies?.uris) {
      setUris(cookies.uris);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    updateCookie(JSON.stringify(uris));
    retrieveData();
  }, [uris]);

  useEffect(() => {
    if (uris.length === notes.length) setLoading(false);
  }, [uris.length, notes.length]);

  const retrieveData = async () => {
    setNotes([]);
    uris.forEach(async (uri) => {
      const data = await storage?.downloadJSON(uri);
      data.cid = uri.substring(7);
      setNotes((prev) => [...prev, data]);
    });
  };

  const handleClose = () => {
    if (noteIndex !== null) setNoteData(initNote);
    setModalOpen(false);
    setNoteIndex(null);
  };

  const handleCreate = async () => {
    if (!noteData.title && !noteData.content) {
      handleClose();
      return;
    }

    setSaving(true);

    // removing CID from data to be uploaded
    const { cid, ...data } = noteData;

    const time = JSON.stringify(new Date());
    const trimmedTime = time.substring(1, time.length - 1);

    data.createdAt = trimmedTime;
    data.updatedAt = trimmedTime;

    const _uris = await storage?.uploadBatch([data]);
    setUris((prev: string[]) => {
      if (_uris?.length) return [...prev, ..._uris];
      return prev;
    });

    handleClose();
    setSaving(false);
    setNoteData(initNote);
  };

  const handleUpdate = async () => {
    if (!noteData.title && !noteData.content) {
      handleClose();
      return;
    }

    setSaving(true);

    // removing CID from data to be uploaded
    const { cid, ...data } = noteData;

    const time = JSON.stringify(new Date());
    const trimmedTime = time.substring(1, time.length - 1);

    data.updatedAt = trimmedTime;

    const _uris = await storage?.uploadBatch([data]);
    setUris((prev: string[]) => {
      return prev.map((uri, i) => {
        if (i === noteIndex) {
          return _uris?.length ? _uris[0] : "";
        }
        return uri;
      });
    });

    handleClose();
    setSaving(false);
    setNoteData(initNote);
  };

  return (
    <>
      {modalOpen ? (
        <Modal
          isNew={noteIndex === null}
          noteData={noteData}
          setNoteData={setNoteData}
          handleClose={handleClose}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          saving={saving}
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
                  setNoteIndex(null);
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
        <div className="container mx-auto">
          <Background />
          {loading ? (
            <div className="flex flex-col items-center justify-center h-72">
              <Loader />
              <p>Retrieving Data...</p>
            </div>
          ) : (
            <>
              <div
                className="relative grid gap-4 z-10
               sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 "
              >
                {notes.map((note, i) => (
                  <NoteCard
                    key={i}
                    noteData={note}
                    setNoteData={setNoteData}
                    handleOpen={() => {
                      setNoteIndex(i);
                      setModalOpen(true);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
