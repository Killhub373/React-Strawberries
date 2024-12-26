import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import "../Style/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:2026/api/user/login", {
        email,
        password,
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil Login!",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        login(); // Update authentication state
        navigate("/");
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Periksa kembali email dan password Anda",
      });
      console.log(error);
    }
  };

  return (
    <div className="body1 md:text-base lg:h-100vh sm:text-sm">
      <div className="container1">
        <h3>Login</h3>
        <form onSubmit={handleLogin} method="POST">
          <label>Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
          <br />
          <button type="submit">Login</button>
          <p>
            Belum punya akun?
            <a href="/register" className="register-link">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
