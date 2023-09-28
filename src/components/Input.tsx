// only for text or email

type InputProps = {
  props: any;
};

function Input({ props }: InputProps) {
  return (
    <input
      className="px-4 py-2 bg-transparent border border-zinc-500 rounded-md mb-4 mt-1 outline-none focus:border-zinc-200"
      {...props}
    />
  );
}

export default Input;
