"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { tokenType } from "@/types/enums";
import Header from "@/components/Header";
import { useUser } from "@/contexts/UserProvider";
import Loader from "@/components/Loader";

function Profile() {
  const [verifyButtonClicked, setVerifyButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = useUser();

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
        email: user.email,
        emailType: tokenType.VERIFY_USER,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err.response.data.message));
  };

  return (
    <>
      <Header
        items={
          <>
            {user.isVerified ? (
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
      <main className="pt-28 min-h-screen transition-all bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-16 text-center">Profile page</h1>

          {user.email ? (
            <table className="text-lg w-full max-w-xs mx-auto">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td className="text-right">{user.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td className="text-right">{user.email}</td>
                </tr>
                <tr>
                  <td>isVerified</td>
                  <td className="text-right">{user.isVerified.toString()}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <Loader />
          )}
        </div>
      </main>
    </>
  );
}

export default Profile;
