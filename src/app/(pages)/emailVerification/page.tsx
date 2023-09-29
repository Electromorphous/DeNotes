"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeButton from "@/components/ThemeButton";

function EmailVerification() {
  const [token, setToken] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const verifyEmail = async () => {
    await axios
      .post("/api/users/verifyEmail", { token: token })
      .then((res) => {
        setSuccess(true);
        router.push("/login");
      })
      .catch((err) => console.error(err.response.data.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const tok = window.location.search.split("=")[1];
    if (!tok) router.push("/");
    setToken(tok);
  }, []);

  useEffect(() => {
    verifyEmail();
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-all bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary">
      <div className="absolute top-5 right-6 flex gap-7">
        <ThemeButton />
      </div>

      <h1 className="text-4xl">Email Verification</h1>
      <h2 className="p-2">
        {loading ? (
          "Verifying email..."
        ) : success ? (
          "Your Email has been verified. Redirecting..."
        ) : (
          <>
            An error occured while verifying your email. Go to{" "}
            <Link className="text-blue-700 dark:text-blue-400" href="/">
              home page
            </Link>
            .
          </>
        )}
      </h2>
    </div>
  );
}

export default EmailVerification;
