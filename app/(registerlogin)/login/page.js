"use client";
import React, { useState } from "react";
import styles from "../styles.module.css";
import { useRouter } from "next/navigation";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setUserAuthenticated] = useState(false);
  const router = useRouter();

  // onLogin function to update authentication status and store token
  const onLogin = (token) => {
    // Store the token in localStorage for future authenticated requests
    localStorage.setItem("token", token);

    // Update the user's authentication state
    setUserAuthenticated(true);

    // Redirect the user to a protected route
    router.push("/qr/{userid}");
  };
  
  //function to fetch details from backend and verify
  const handleLogin = async () => {
    try {
      // Send a POST request to the backend for authentication
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        // Authentication successful
        const data = await response.json();
        const token = data.token;

        onLogin(token);
      } else {
        // Authentication failed, handle error
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default login;
