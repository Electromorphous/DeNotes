import ThemeButton from "./ThemeButton";

type HeaderPropsType = {
  items?: React.ReactNode;
};

function Header({ items = <></> }: HeaderPropsType) {
  return (
    <div
      className="transition-all 
      bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary
      fixed top-0 left-0 right-0 z-10"
    >
      <div
        className="container mx-auto py-2 px-5 sm:px-11 
      flex items-center justify-between"
      >
        <h1 className="text-4xl outline-none select-none">DeNotes</h1>
        <div className="flex justify-center items-center gap-1 sm:gap-3">
          {items}
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
