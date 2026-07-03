import React from "react";

const styles: {
  container: React.CSSProperties;
} = {
  container: {
    display: "flex",
    minHeight: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeff1",
  },
};

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div style={styles.container}>
      {props.children}
    </div>
  );
};
