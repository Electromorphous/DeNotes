import { ReactNode, createContext, useCallback, useContext } from "react";
import { useCookies } from "react-cookie";
import Cryptojs from "crypto-js";

const KEY = import.meta.env.VITE_ENCRYPTION_KEY;

type PropsType = {
  children: ReactNode;
};

const CookieContext = createContext<{
  getCookie: () => string[];
  updateCookie: (payload: string[]) => void;
}>({
  getCookie: () => [],
  updateCookie: () => {},
});

export function useCookie() {
  return useContext(CookieContext);
}

function CookieProvider({ children }: PropsType) {
  const [cookies, setCookie] = useCookies(["enc-uris"]);

  const getCookie = useCallback(() => {
    if (!KEY) return [];

    const enc_uris: string = cookies["enc-uris"];

    if (enc_uris) {
      const bytes = Cryptojs.AES.decrypt(enc_uris, KEY);
      return JSON.parse(bytes.toString(Cryptojs.enc.Utf8));
    }
    return [];
  }, []);

  const updateCookie = useCallback((payload: string[]) => {
    if (!KEY) return;

    const encryptedUris = Cryptojs.AES.encrypt(
      JSON.stringify(payload),
      KEY
    ).toString();
    setCookie("enc-uris", encryptedUris, { sameSite: "strict" });
  }, []);

  return (
    <CookieContext.Provider value={{ getCookie, updateCookie }}>
      {children}
    </CookieContext.Provider>
  );
}

export default CookieProvider;
