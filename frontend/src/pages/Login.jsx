import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://netflix-login-page-2-3tzt.onrender.com/login", {
        email,
        password,
      });

      if (res.data.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black px-4">
      {/* Demo Credentials */}
      <div className="bg-gray-900 border border-red-600 p-4 rounded-md mb-6 w-full max-w-sm text-center">
        <h2 className="text-red-600 text-xl mb-2">⭐ Demo Credentials</h2>
        <p>Email: <b>demo@gmail.com</b></p>
        <p>Password: <b>123456</b></p>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-6 rounded-md w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Sign In</h1>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full p-3 bg-red-600 rounded hover:bg-red-700 font-bold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}




