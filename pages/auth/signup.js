
import { useState } from "react";
import API from "../../utils/api";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/signup", formData);
      enqueueSnackbar("User created successfully! Please log in.", {
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
      router.push("/auth/signin");
    } catch (error) {
      enqueueSnackbar(
        error.response?.data?.message || "Something went wrong!",
        {
          variant: "error",
          preventDuplicate: true,
          autoHideDuration: 3000,
        }
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center text-black mb-4">Sign Up</h2>
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          type="text"
        />
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
        <Button type="submit" label="Sign Up" className="w-full mt-4" />
      </form>
    </div>
  );
}
