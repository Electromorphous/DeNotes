import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import UserDataType from "@/types/userDataType";
// import Cookies from "universal-cookie";

type PropsType = {
  children: React.ReactNode;
};

const UserContext = createContext<UserDataType | null>(null);
const UserUpdateContext = createContext<
  Dispatch<SetStateAction<UserDataType | null>>
>(() => {});

export function useUser() {
  return useContext(UserContext);
}
export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

function UserProvider({ children }: PropsType) {
  const [user, setUser] = useState<UserDataType | null>(null);

  // less secure because cookies should be allowed to be accessed by client
  // const jwt_auth_token = new Cookies().get("jwt_auth_token");
  // useEffect(() => {
  //   if (jwt_auth_token && !user) getUserData();
  // }, [user, jwt_auth_token]);

  const getUserData = async () => {
    await axios
      .get("/api/users/getUserFromToken")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => console.error(err.response));
  };

  useEffect(() => {
    if (!user) getUserData();
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}

export default UserProvider;
