// only for text or email

type InputProps = {
  props: any;
};

function Input({ props }: InputProps) {
  return (
    <input
      className="px-4 py-2 rounded-md mb-4 mt-1 transition-all outline-none bg-transparent border
      border-zinc-500 focus:border-dark-primary
      dark:border-zinc-600 dark:focus:border-light-primary"
      {...props}
    />
  );
}

export default Input;
