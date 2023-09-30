import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Button from "./Button";
import NoteDataType from "@/types/noteDataType";
import Input from "./Input";
import Textarea from "./Textarea";

interface Props {
  noteData: NoteDataType | null;
  setNoteData: Dispatch<SetStateAction<NoteDataType | null>>;
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
                  // value:{noteData.path.slice(0, -4)},
                  onChange: (e: any) => {},
                  placeholder: "Title",
                  className: "text-xl",
                }}
              />
            </div>
          </div>
        </div>

        <Textarea
          props={{
            //   value:{noteData.content},
            onChange: (e: any) => {},
            placeholder: "Content",
          }}
        />

        <div className="flex items-center justify-between">
          <p>Last update: {noteData?.updatedAt || "Now"}</p>
          <Button
            props={{
              onClick: {
                //   noteData.path.slice(0, -4) && noteData.content ? handleSave : () => {}
              },
              disabled: loading,
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default Modal;
