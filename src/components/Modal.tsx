import { Dispatch, SetStateAction, useEffect } from "react";
import Button from "./Button";
import NoteType from "../types/NoteType";
import Input from "./Input";
import Textarea from "./Textarea";
import dateToString from "../utilities/DateToString";

interface Props {
  isNew: boolean;
  noteData: NoteType;
  setNoteData: Dispatch<SetStateAction<NoteType>>;
  handleClose: () => void;
  handleCreate: () => void;
  handleUpdate: () => void;
  handleDelete: () => void;
  saving: boolean;
}

function Modal({
  isNew,
  noteData,
  setNoteData,
  handleClose,
  handleCreate,
  handleUpdate,
  handleDelete,
  saving,
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
        px-6 py-1 pb-3 w-11/12 md:w-9/12 
        rounded-lg shadow-md z-20
        bg-light-notebg text-dark-primary dark:bg-dark-notebg dark:text-light-primary"
      >
        <div className="flex items-center justify-between gap-6">
          <p className="text-zinc-500 mb-3 break-all text-xs md:text-sm">
            CID: {noteData.cid || "Not assigned"}
          </p>
          <Button
            props={{
              onClick: handleDelete,
              disabled: isNew,
            }}
          >
            Delete
          </Button>
        </div>

        <Input
          props={{
            type: "text",
            autoFocus: true,
            value: noteData.title,
            onChange: (e: any) => {
              setNoteData((prev: NoteType) => ({
                ...prev,
                title: e.target.value,
              }));
            },
            placeholder: "Title",
            className: "text-2xl",
          }}
        />

        <Textarea
          props={{
            value: noteData.content,
            onChange: (e: any) => {
              setNoteData((prev: NoteType) => ({
                ...prev,
                content: e.target.value,
              }));
            },
            placeholder: "Content",
          }}
        />

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm">
            Last update:{" "}
            {isNew ? "Now" : `${dateToString(new Date(noteData.updatedAt))}`}
          </p>

          <p className="text-zinc-500 select-none hidden md:block ">
            esc to close
          </p>

          <div className="flex items-center justify-center gap-3">
            <Button
              props={{
                onClick: isNew ? handleCreate : handleUpdate,
                disabled: saving,
              }}
            >
              {isNew
                ? saving
                  ? "Creating..."
                  : "Create"
                : saving
                ? "Updating..."
                : "Update"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
