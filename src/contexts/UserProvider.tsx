import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type PropsType = {
  children: React.ReactNode;
};

const initUserData = {
  name: "",
  email: "",
  password: "",
  isVerified: false,
  notes: [],
  forgotPasswordToken: "",
  forgotPasswordTokenExpiration: null,
  verifyToken: "",
  verifyTokenExpiration: null,
};

const UserContext = createContext(initUserData);

export function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }: PropsType) {
  const [user, setUser] = useState(initUserData);

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
