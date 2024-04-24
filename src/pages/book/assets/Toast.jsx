import React, { useState, useEffect } from "react";

function Toast(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, props.autoClose || 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [props.autoClose]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        display: isVisible ? "block" : "none",
      }}
      onClick={handleClose}
    >
      <span style={{ marginRight: "10px" }}>{props.message}</span>
      <button
        style={{
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={handleClose}
      >
        &#x2715;
      </button>
    </div>
  );
}



export default Toast;
