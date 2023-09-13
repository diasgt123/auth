"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles.module.css";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Step 2

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Step 3: Create a function to handle changes in the confirm password field
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegistration = async () => {
    // Send user data to the server for registration
    try {
      // Step 5: Check if the password and confirm password match
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.status === 200) {
        // Registration successful, redirect to login page
        router.push("/login");
      } else {
        // Handle registration failure (e.g., display error message)
        // ...
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className={styles.input}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.input}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {password && (
            <img
              src={showPassword ? "/eye.png" : "/eye2.png"}
              alt="Toggle Password Visibility"
              className="eye"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        <div className={styles.input}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange} 
          />
          {password && (
            <img
              src={showPassword ? "/eye.png" : "/eye2.png"}
              alt="Toggle Password Visibility"
              className="eye"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        <div className={styles.submit}>
          <button onClick={handleRegistration}>Sign Up</button>
        </div>
      </div>
      <p>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </>
  );
};

export default register;
