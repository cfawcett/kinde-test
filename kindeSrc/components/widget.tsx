import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";

const EdgeVisLogo = () => (
  <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "1.5rem" }}>
    <path d="M50 15 C 75 15, 85 30, 85 50 C 85 70, 75 85, 50 85 C 25 85, 15 70, 15 50 C 15 30, 25 15, 50 15 Z" fill="#1d2331" />
    <path d="M40 25 C 60 25, 68 35, 68 50 C 68 65, 60 75, 40 75 C 20 75, 28 65, 28 50 C 28 35, 20 25, 40 25 Z" fill="white" />
    <path d="M22 25 C 40 10, 65 15, 75 35 C 85 55, 70 70, 50 80 C 30 90, 10 70, 22 50 C 30 35, 15 35, 22 25 Z" fill="#1d2331" />
    <path d="M45 28 C 55 28, 62 38, 62 50 C 62 62, 55 72, 45 72 C 35 72, 28 62, 28 50 C 28 38, 35 28, 45 28 Z" fill="white" />
  </svg>
);

const styles: {
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  card: React.CSSProperties;
} = {
  loginForm: {
    minWidth: "400px",
    maxWidth: "460px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "3rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  },
  heading: {
    fontWeight: "500",
    fontSize: "1.75rem",
    color: "#1c202a",
    marginBottom: "1.5rem",
  },
  description: {
    marginBottom: "1.5rem",
    display: "none",
  },
};

export const Widget = (props: { heading: string; description: string }) => {
  return (
    <main style={styles.loginForm}>
      <div style={styles.card}>
        <EdgeVisLogo />
        <h2 style={styles.heading}>{props.heading}</h2>
        <p style={styles.description}>{props.description}</p>
        {getKindeWidget()}
      </div>
    </main>
  );
};
