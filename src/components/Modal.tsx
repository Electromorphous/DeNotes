import { Dispatch, SetStateAction, useEffect } from "react";
import Button from "./Button";
import NoteDataType from "@/types/noteDataType";
import Input from "./Input";
import Textarea from "./Textarea";

interface Props {
  noteData: NoteDataType;
  setNoteData: Dispatch<SetStateAction<NoteDataType>>;
  handleClose: () => void;
  handleSave: () => void;
  loading: boolean;
}

function Modal({
  noteData,
  setNoteData,
  handleClose,
  handleSave,
  loading,
}: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    addEventListener("keydown", handleEsc);
    return () => {
      removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <div
        className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0
      bg-transparent backdrop-blur-sm z-20"
        onClick={handleClose}
      />

      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        p-6 w-11/12 md:w-9/12 
        rounded-lg shadow-md z-20
        bg-zinc-100 text-dark-primary dark:bg-zinc-900 dark:text-light-primary"
      >
        <div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Input
                props={{
                  type: "text",
                  autoFocus: true,
                  value: noteData.title,
                  onChange: (e: any) => {
                    setNoteData((prev: NoteDataType) => ({
                      ...prev,
                      title: e.target.value,
                    }));
                  },
                  placeholder: "Title",
                  className: "text-xl",
                }}
              />
            </div>
          </div>
        </div>

        <Textarea
          props={{
            value: noteData.content,
            onChange: (e: any) => {
              setNoteData((prev: NoteDataType) => ({
                ...prev,
                content: e.target.value,
              }));
            },
            placeholder: "Content",
          }}
        />

        <div className="flex items-center justify-between">
          <p>Last update: {noteData.updatedAt || "Now"}</p>
          <p className="text-zinc-500">esc to close</p>
          <div className="flex items-center justify-center gap-3">
            <Button
              props={{
                onClick: {
                  //   noteData.path.slice(0, -4) && noteData.content ? handleSave : () => {}
                },
                disabled: loading,
              }}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
