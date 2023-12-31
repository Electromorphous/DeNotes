import { Dispatch, SetStateAction } from "react";
import NoteType from "../types/NoteType";

type NoteProps = {
  noteData: NoteType;
  setNoteData: Dispatch<SetStateAction<NoteType>>;
  handleOpen: () => void;
};

function NoteCard({ noteData, setNoteData, handleOpen }: NoteProps) {
  return (
    <button
      className="transition-all px-5 py-3 pb-5 rounded-md shadow-md text-left outline-none
      bg-light-notebg text-dark-primary dark:bg-dark-notebg dark:text-light-primary
      cursor-pointer hover:-translate-y-1 hover:shadow-lg
      focus:-translate-y-1 focus:shadow-lg"
      onClick={() => {
        setNoteData(noteData);
        handleOpen();
      }}
    >
      <h1 className="text-3xl">{noteData.title || <>&nbsp;</>}</h1>
      <p>{noteData.content || <>&nbsp;</>}</p>
    </button>
  );
}

export default NoteCard;
