type TextareaProps = {
  props: any;
};

function Textarea({ props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`w-full px-4 py-2 rounded-md mb-4 mt-1 transition-all outline-none bg-transparent border
        border-zinc-400 focus:border-black
        dark:border-zinc-600 dark:focus:border-light-primary
        placeholder:text-zinc-500
        ${props.className}`}
      rows={7}
    />
  );
}

export default Textarea;
