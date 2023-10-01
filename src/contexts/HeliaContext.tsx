import { createHelia } from "helia";
import { strings } from "@helia/strings";
import { createContext, useContext, useState, useEffect } from "react";

type PropsType = {
  children: React.ReactNode;
};

const HeliaContext = createContext<any>(null);

export function useHelia() {
  return useContext(HeliaContext);
}

function HeliaProvider({ children }: PropsType) {
  const [heliaStrings, setHeliaStrings] = useState<any>(null);

  const getHeliaStrings = async () => {
    const helia = await createHelia();
    setHeliaStrings(strings(helia));
  };

  useEffect(() => {
    getHeliaStrings();
  }, []);

  return (
    <HeliaContext.Provider value={heliaStrings}>
      {children}
    </HeliaContext.Provider>
  );
}

export default HeliaProvider;
