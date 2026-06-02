import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import ButtonSpinner from "../components/common/ButtonSpinner";

import { loginUser, getCurrentUser } from "../api/auth";

function Login() {
  useEffect(() => {
    document.title = "Login | TicketFlow";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const toastId = toast.loading("Signing in...");

      const response = await loginUser({
        email,
        password,
      });

      console.log("LOGIN RESPONSE", response);

      localStorage.setItem("token", response.access_token);

      const user = await getCurrentUser();

      console.log("CURRENT USER", user);

      localStorage.setItem("role", user.role);

      toast.success("Login successful", { id: toastId });

      setTimeout(() => {
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }, 500);
    } catch (error) {
      console.error(error);

      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>

        <p className="text-gray-500 text-center mb-8">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="
            bg-indigo-600
            text-white
            py-3
            rounded-xl
            font-medium
            flex
            items-center
            justify-center
            gap-2
            disabled:opacity-50
            "
          >
            {loading ? (
              <>
                <ButtonSpinner />
                Signing In...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
