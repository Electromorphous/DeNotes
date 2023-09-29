"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { tokenType } from "@/types/enums";
import Header from "@/components/Header";

function Profile() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
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
    <>
      <Header
        items={
          <>
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
          </>
        }
      />
      <main className="pt-28 min-h-screen bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-16 text-center">Profile page</h1>

          <table className="text-lg w-full max-w-xs mx-auto">
            <tbody>
              <tr>
                <td>Username</td>
                <td className="text-right">{userData.username}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className="text-right">{userData.email}</td>
              </tr>
              <tr>
                <td>isVerified</td>
                <td className="text-right">{userData.isVerified.toString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Profile;
