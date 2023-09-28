// only for password
import { useState } from "react";
import Image from "next/image";

type InputProps = {
  props: any;
};

function Password({ props }: InputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        className="px-4 py-2 bg-transparent border border-zinc-500 rounded-md mb-4 mt-1 outline-none focus:border-zinc-200"
        {...props}
      />
      <button
        type="button"
        className="absolute top-2 right-1 hover:bg-zinc-800 rounded-xl"
        style={{ padding: 7 }}
        onClick={() => setVisible((prev) => !prev)}
      >
        <Image
          src={visible ? "/assets/visible.svg" : "/assets/hidden.svg"}
          alt="Password visible"
          className="dark:invert"
          width={19}
          height={19}
          priority
        />
      </button>
    </div>
  );
}

export default Password;
