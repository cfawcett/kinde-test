import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";
import { logoUrl } from "../assets/logo";

const styles: {
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  card: React.CSSProperties;
  logo: React.CSSProperties;
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
  logo: {
    width: "76px",
    height: "auto",
    marginBottom: "1.5rem",
    display: "block",
  },
};

export const Widget = (props: { heading: string; description: string }) => {
  return (
    <main style={styles.loginForm}>
      <div style={styles.card}>
        <img src={logoUrl} alt="DigitalBarriers Symbol" style={styles.logo} />
        <h2 style={styles.heading}>{props.heading}</h2>
        <p style={styles.description}>{props.description}</p>
        {getKindeWidget()}
      </div>
    </main>
  );
};
