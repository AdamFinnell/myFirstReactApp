import React from "react";

export default function Square({ name, bgImage }) {
  return (
    <div
      className="square"
      style={{
        width: "150px",
        height: "150px",
        backgroundImage: `url(${bgImage})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "8px"
      }}
    >
      {name}
    </div>
  );
}
