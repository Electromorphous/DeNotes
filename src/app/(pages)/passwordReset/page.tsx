"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Button from "@/components/Button";
import Password from "@/components/Password";
import ThemeButton from "@/components/ThemeButton";

function PasswordReset() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.password || formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    setLoading(true);

    await axios
      .post("/api/users/resetPassword", {
        token: token,
        newPassword: formData.password,
      })
      .then((res) => {
        console.log("Success", res.data);
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary">
      <div className="absolute top-5 right-6 flex gap-7">
        <ThemeButton />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col border rounded-lg px-6 py-4 border-dark-primary dark:border-light-primary"
      >
        <h1 className="text-lg mb-1 text-center">Reset Password</h1>

        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <Password
          props={{
            autoFocus: true,
            required: true,
            id: "password",
            name: "password",
            value: formData.password,
            onChange: (e: any) =>
              setFormData((prev) => ({ ...prev, password: e.target.value })),
          }}
        />

        <label htmlFor="confirmPassword" className="text-sm">
          Confirm Password
        </label>
        <Password
          props={{
            required: true,
            id: "confirmPassword",
            name: "confirmPassword",
            value: formData.confirmPassword,
            onChange: (e: any) =>
              setFormData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              })),
          }}
        />

        <Button props={{ type: "submit", disabled: loading }}>
          {loading ? "Changing Password..." : "Reset Password"}
        </Button>
      </form>
    </div>
  );
}

export default PasswordReset;
