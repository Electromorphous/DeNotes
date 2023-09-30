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

  // const getUserData = async () => {
  //   await axios
  //     .get("/api/users/getUserFromToken")
  //     .then((res) => {
  //       setUser(res.data.user);
  //     })
  //     .catch((err) => console.error(err.response));
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}

export default UserProvider;
