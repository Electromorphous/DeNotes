import { ReactNode, createContext, useContext } from "react";
import { useCookies } from "react-cookie";

type PropsType = {
  children: ReactNode;
};

const CookieContext = createContext<{
  cookies?: any;
  updateCookie: (payload: string) => void;
}>({
  cookies: "",
  updateCookie: () => {},
});

export function useCookie() {
  return useContext(CookieContext);
}

function CookieProvider({ children }: PropsType) {
  const [cookies, setCookie] = useCookies(["uris"]);

  const updateCookie = (payload: string) => {
    setCookie("uris", payload, { sameSite: "strict" });
  };

  return (
    <CookieContext.Provider value={{ cookies, updateCookie }}>
      {children}
    </CookieContext.Provider>
  );
}

export default CookieProvider;
