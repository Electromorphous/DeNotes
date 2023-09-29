"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Password from "@/components/Password";
import ThemeButton from "@/components/ThemeButton";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post("/api/users/login", user)
      .then((res) => {
        console.log("Success", res.data);
        router.push("/dashboard");
      })
      .catch((err) => console.error(err.response.data.message))
      .finally(() => setLoading(false));
  };

  return (
    <main className="flex items-center justify-center min-h-screen transition-all bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary">
      <div className="absolute top-5 right-6 flex gap-7">
        <ThemeButton />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col border rounded-lg px-6 py-4 w-full max-w-sm border-dark-primary dark:border-light-primary"
      >
        <h1 className="text-lg mb-1 text-center">Login</h1>

        <label htmlFor="Email" className="text-sm">
          Email
        </label>
        <Input
          props={{
            autoFocus: true,
            required: true,
            type: "email",
            id: "email",
            name: "email",
            value: user.email,
            onChange: (e: any) =>
              setUser((prev) => ({ ...prev, email: e.target.value })),
          }}
        />

        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <Password
          props={{
            required: true,
            id: "password",
            name: "password",
            value: user.password,
            onChange: (e: any) =>
              setUser((prev) => ({ ...prev, password: e.target.value })),
          }}
        />

        <Button props={{ type: "submit", disabled: loading }}>
          {loading ? "Logging in..." : "Login"}
        </Button>
        <div className="flex items-center justify-between">
          <Link
            href="/forgotPassword"
            className="text-xs hover:underline w-fit"
          >
            Forgot Password
          </Link>
          <Link href="/signup" className="text-xs hover:underline w-fit">
            Create account
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
