// pages/index.js or your relevant file
import React from "react";
import Head from "next/head";
import Image from "next/image";
import "./globals.css";
import HeaderButton from "@/app/components/headerbutton";
import Navbar from "@/app/components/navbar";
import './components/headerbutton.css';
import './components/navbar.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <div className="titlecard">
            <h1 className="title" style={{ fontSize: "80pt" }}>
              THE CLOUD WITHOUT THE HASSLE
            </h1>
            <p className="subtitle" style={{ fontSize: "19pt" }}>
              Forget intermediaries, you & your team will directly collaborate
              with your designer on Slack.
            </p>
            <button className="HeaderButton">
              CONTINUE
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="features">
            <div className="feature-item secure-feature">
              <img src="/images/FAST-Feature_Background-02-01.png" className="feature-background" alt="Secure Feature Background" />
              <div className="text-gradient"></div>
              <div className="text-box">
                <h2 className="feature-title" style={{ fontSize: "44pt" }}>
                  SECURE
                </h2>
                <p className="feature-description" style={{ fontSize: "19pt" }}>
                  Forget intermediaries, you & your team will directly collaborate with your designer on Slack.
                </p>
              </div>
            </div>
            <div className="feature-item fast-feature">
              <img src="/images/FAST-Feature_Background-02-01.png" className="feature-background" alt="Fast Feature Background" />
              <div className="text-gradient"></div>
              <div className="text-box">
                <h2 className="feature-title" style={{ fontSize: "44pt" }}>
                  FAST
                </h2>
                <p className="feature-description" style={{ fontSize: "19pt" }}>
                  Forget intermediaries, you & your team will directly collaborate with your designer on Slack.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="empty-item">
          <h1 className="title">THE CLOUD WITHOUT THE HASSLE</h1>
        </div>
      </div>
      <div className="testcontainer">
      </div>
    </>
  );
}
