// only for password
import { useState } from "react";

type PasswordProps = {
  props: any;
};

function Password({ props }: PasswordProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        {...props}
        type={visible ? "text" : "password"}
        className={`w-full px-4 py-2 rounded-md mb-4 mt-1 transition-all outline-none bg-transparent border
        border-zinc-400 focus:border-black
        dark:border-zinc-600 dark:focus:border-light-primary
      placeholder:text-zinc-500
        ${props.className}`}
      />
      <button
        type="button"
        className="absolute top-2 right-1 rounded-xl outline-none transition-all
        hover:bg-light-secondary focus:bg-light-secondary
        dark:hover:bg-dark-secondary dark:focus:bg-dark-secondary"
        style={{ padding: 7 }}
        onClick={() => setVisible((prev) => !prev)}
      >
        <img
          src={visible ? "/assets/visible.svg" : "/assets/hidden.svg"}
          alt="Password visible"
          className="dark:invert"
          width={19}
          height={19}
        />
      </button>
    </div>
  );
}

export default Password;
