'use client'
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'

const register = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter()

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

  const handleRegistration = async () => {
    // Send user data to the server for registration
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.status === 200) {
        // Registration successful, redirect to login page
        router.push('/login')
      } else {
        // Handle registration failure (e.g., display error message)
        // ...
      }
    } catch (error) {
      console.error('Error during registration:', error)
    }
  };  
  return (
    <>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleRegistration}>Sign Up</button>
      <p>Already have an account? <a href="/login">Log in</a></p>
    </>
  )
}

export default register