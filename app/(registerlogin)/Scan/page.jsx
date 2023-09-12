"use client";
import React from "react";
import "./Scan.css";
import bus_image from "public/bus.png";
import bus1_image from "public/bus1.png";
import profile_image from "public/profile.png";
import { useRouter } from "next/navigation";


const Scan = () => {
  return (
    <div className="page2">
      <header className="header">
        <div className="row">
        <h1 className="heading-left">QRide</h1>
        <img className="profile" src={profile_image} alt="" />
        </div>
      </header>
      <main className="main-content">
        <div className="text">
          <h2 className="text1">Effortless Bus Travel</h2>
          <h3 className="text2">Scan, Know, Go!</h3>
          <p className="text3">Streamline your bus journey with a single scan.</p>
        </div>
        <img className="bus-image" src={bus1_image} alt="Bus" />
        <button className="scan-button">Scan now</button>
      </main>
    </div>
  );
};

export default Scan;
