"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import './LoginSignup.css';

import qr_image from 'public/qr.png';
// import g_image from '../Assets/google.png';
import eye from 'public/eye.png';
import eye2 from 'public/eye2.png';


const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [name, setName] = useState(""); // Add state for name
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

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


    const handleSignUp =()=>{
        fetch("/signup",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json",
            },
        }
        )
        .then((response)=>response.json())
        .then((data) => {
            //routing logic
        })
    };

        const handleLogin =()=>{
            fetch("/login",{
                method:"POST",
                body:JSON.stringify({email,password}),
                headers:{
                    "Content-Type":"application/json",
                },
            }
            )
            .then((response)=>response.json())
            .then((data) => {
                //routing logic
            })
    };

    const handleSubmit = () => {
        if (action === "Sign Up") {
            handleSignUp();
        } else {
            handleLogin();
        }
    };


    return (
        <>
            <div className="page">
                <div className="row">
                    <div className="column">
                        <div className="text1">QRide</div>
                        <img className="qr" src={qr_image} alt="" />
                        <div className="column-fill"></div>
                    </div>
                    <div className="column1">
                           
                        {/* <div className="text2">{action === "Sign Up" ? "Register" : "Login"}</div> */}
                        <div className="inputs">
                        <div className="submit-container">
                                <button className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
                                <button className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</button>
                            </div>
                            {action==="Login"?<div></div>:<div className="input">
                            <input type="text" placeholder="Name"/>
                            </div>}
                            <div className="input">
                                <input type="email" placeholder="Enter Email" />
                            </div>
                            <div className="input">
                                <input type={showPassword ? "text" : "password"} placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange} />
                              {password && (
                                <img
                                    src={showPassword ? eye : eye2}
                                    alt="Toggle Password Visibility"
                                    className="eye"
                                    onClick={togglePasswordVisibility}
                                />
                            )}
                            </div>
                            <div className="submit">Submit</div>
                            {/* <div className="signgoogle">
                                Sign In with Google
                                <img className="google" src={g_image} alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginSignup;
