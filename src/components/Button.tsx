type ButtonProps = {
  children: string;
  props: any;
};

function Button({ children, props }: ButtonProps) {
  return (
    <button
      className="px-3 py-1 rounded-lg my-3 outline-none transition-all
      bg-transparent border border-dark-primary hover:bg-dark-primary hover:text-light-primary
      focus:bg-dark-primary focus:text-light-primary
      disabled:bg-zinc-400 disabled:border-zinc-400 disabled:text-black
      dark:border-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary
      dark:focus:bg-light-primary dark:focus:text-dark-primary
      dark:disabled:bg-zinc-700 dark:disabled:border-zinc-700 dark:disabled:text-white"
      {...props}
    >
      <strong>{children}</strong>
    </button>
  );
}

export default Button;
