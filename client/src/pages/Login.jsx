import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // FIXED ROUTE
      const response = await api.post("/api/auth/login", { email, password });

      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      window.location.href = "/projects";
    } catch (error) {
      console.error(error);
      alert("Login failed.");
    }
  };

  return (
    <div className="page-container">
      <h2>Login</h2>

      <form className="form-card" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
