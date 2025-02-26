import React from "react";
import sos from "../Images/sos.jpeg";

const Sos = () => {
  return (
    <button style={styles.container}>
      <img src={sos} alt="sos" style={styles.image} />
    </button>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
  },
  image: {
    width: "60px", // Adjust size if needed
    height: "60px",
    borderRadius: "50%",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
  },
};

export default Sos;
