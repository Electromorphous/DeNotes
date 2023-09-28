"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { tokenType } from "@/types/enums";

function Profile() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    isAdmin: false,
    isVerified: true,
  });
  const [verifyButtonClicked, setVerifyButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getUserData = async () => {
    await axios
      .get("/api/users/profile")
      .then((res) => {
        setUserData(res.data.user);
      })
      .catch((err) => console.error(err.response.data.error));
  };

  const logout = async () => {
    setLoading(true);

    await axios
      .get("/api/users/logout")
      .then(() => {
        router.push("/login");
      })
      .catch((err) => console.error(err.response.data.message))
      .finally(() => setLoading(false));
  };

  const verifyEmail = async () => {
    setVerifyButtonClicked(true);

    // send verification mail
    await axios
      .post("/api/users/sendEmail", {
        email: userData.email,
        emailType: tokenType.VERIFY_USER,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err.response.data.message));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <div className="flex justify-between items-start ">
        <div className="info">
          <h1 className="text-2xl mb-6">Profile page</h1>

          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>isAdmin: {userData.isAdmin.toString()}</p>
          <p>isVerified: {userData.isVerified.toString()}</p>
        </div>

        <div className="flex gap-2">
          {userData.isVerified ? (
            <></>
          ) : (
            <Button
              props={{ onClick: verifyEmail, disabled: verifyButtonClicked }}
            >
              {verifyButtonClicked ? "Email Sent" : "Verify Email"}
            </Button>
          )}
          <Button props={{ onClick: logout, disabled: loading }}>
            {loading ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
