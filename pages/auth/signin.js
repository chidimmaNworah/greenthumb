import { useState } from "react";
import API from "../../utils/api";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

export default function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await API.post("/api/signin", formData);

      if (data.token) {
        localStorage.setItem("token", data.token);
        enqueueSnackbar("Login Successful", {
          variant: "success",
          preventDuplicate: true,
          autoHideDuration: 3000,
        });

        const redirectTo = router.query?.from || "/";
        router.push(redirectTo);
        // Reload the page after a short delay to ensure the UI updates
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        throw new Error("No token received");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      enqueueSnackbar(
        error.response?.data?.message || "Something went wrong!",
        {
          variant: "error",
          preventDuplicate: true,
          autoHideDuration: 3000,
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center text-black">Sign In</h2>
        <FormInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
        <FormInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />
        <Button
          type="submit"
          label={isLoading ? "Signing In..." : "Sign In"}
          className="w-full mt-4"
          disabled={isLoading}
        />
      </form>
    </div>
  );
}
