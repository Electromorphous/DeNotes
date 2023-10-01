import { useTheme, useThemeUpdate } from "../contexts/ThemeProvider";

function ThemeButton() {
  const dark = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full outline-none p-2 transition-all
    hover:bg-light-secondary focus:bg-light-secondary
    dark:hover:bg-dark-secondary dark:focus:bg-dark-secondary"
    >
      {dark ? (
        <img
          src={"/assets/sun.svg"}
          width={30}
          height={30}
          alt="Toggle theme"
          className="dark:invert transition-all"
        />
      ) : (
        <img
          src={"/assets/moon.svg"}
          width={30}
          height={30}
          alt="Toggle theme"
          className="dark:invert transition-all"
        />
      )}
    </button>
  );
}

export default ThemeButton;
