import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import UserDataType from "@/types/userDataType";

type PropsType = {
  children: React.ReactNode;
};

const UserContext = createContext<UserDataType | null>(null);

export function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }: PropsType) {
  const [user, setUser] = useState<UserDataType | null>(null);

  const getUserData = async () => {
    await axios
      .get("/api/users/getUser")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => console.error(err.response));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;
