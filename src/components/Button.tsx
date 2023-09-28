type ButtonProps = {
  children: string;
  props: any;
};

function Button({ children, props }: ButtonProps) {
  return (
    <button
      className="px-3 py-1 border border-zinc-300 bg-transparent rounded-lg my-3 outline-none hover:bg-zinc-200 hover:text-black transition-all disabled:bg-zinc-500 disabled:text-black"
      {...props}
    >
      <strong>{children}</strong>
    </button>
  );
}

export default Button;
