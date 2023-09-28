type ButtonProps = {
  children: string;
  props: any;
};

function Button({ children, props }: ButtonProps) {
  return (
    <button
      className="px-3 py-1 rounded-lg my-3 outline-none transition-all
      bg-transparent border border-zinc-950 hover:bg-zinc-950 hover:text-zinc-200
      focus:bg-zinc-950 focus:text-zinc-200
      disabled:bg-zinc-400 disabled:text-black
      dark:border-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-zinc-950
      dark:focus:bg-zinc-200 dark:focus:text-zinc-950
      dark:disabled:bg-zinc-600 dark:disabled:text-white"
      {...props}
    >
      <strong>{children}</strong>
    </button>
  );
}

export default Button;
