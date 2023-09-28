import { useState, useEffect } from "react";
import Image from "next/image";

function ToggleTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setDark(true);
    else setDark(false);
  }, []);

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  return (
    <button onClick={() => setDark((prev) => !prev)}>
      <Image
        src={dark ? "/assets/sun.svg" : "/assets/moon.svg"}
        width={30}
        height={30}
        alt="Toggle theme"
        className="dark:invert transition-all"
      />
    </button>
  );
}

export default ToggleTheme;
