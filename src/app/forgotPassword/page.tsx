"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Password from "@/components/Password";
import { tokenType } from "@/types/enums";

function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post("/api/users/sendEmail", {
        email: email,
        emailType: tokenType.RESET_PASSWORD,
      })
      .then((res) => {
        console.log("Success", res.data);
        router.push("/login");
      })
      .catch((err) => console.error(err.response.data.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border border-zinc-500 rounded-lg px-6 py-4"
      >
        <h1 className="text-lg mb-1 text-center">Reset Your Password</h1>

        <label htmlFor="Email" className="text-zinc-300 text-sm">
          Email
        </label>
        <Input
          props={{
            autoFocus: true,
            required: true,
            type: "email",
            id: "email",
            name: "email",
            value: email,
            onChange: (e: any) => setEmail(e.target.value),
          }}
        />

        <Button props={{ type: "submit", disabled: loading }}>
          {loading ? "Sending Email..." : "Send Email"}
        </Button>
      </form>
    </div>
  );
}

export default Login;
