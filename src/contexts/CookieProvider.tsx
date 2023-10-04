import { ReactNode, createContext, useContext } from "react";
import { useCookies } from "react-cookie";
import Cryptojs from "crypto-js";

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

  const getCookie: () => string[] = () => {
    const enc_uris: string = cookies["enc-uris"];
    console.log("enc_uris", enc_uris);

    if (enc_uris) {
      const bytes = Cryptojs.AES.decrypt(enc_uris, "lol");

      return JSON.parse(bytes.toString(Cryptojs.enc.Utf8));
    }
    return [];
  };
  const updateCookie = (payload: string[]) => {
    console.log("payload", payload);

    const encryptedUris = Cryptojs.AES.encrypt(
      JSON.stringify(payload),
      "lol"
    ).toString();
    setCookie("enc-uris", encryptedUris, { sameSite: "strict" });
  };

  return (
    <CookieContext.Provider value={{ getCookie, updateCookie }}>
      {children}
    </CookieContext.Provider>
  );
}

export default CookieProvider;
