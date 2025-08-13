import React from "react";
import Square from "./Square";

export default function Body() {
  return (
    <main style={{ flex: 1, padding: "32px", textAlign: "center" }}>
      <img
        src="src/images/cyberViking4.jpg"
        alt="Cyberpunk Viking"
        style={{ borderRadius: "12px", marginBottom: "1rem", boxShadow: "0 0 20px #0ff" }}
      />
      <p style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "32px" }}>
        Welcome to my React site! Enjoy the magic of React.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
        <Square
          name="Cyber Thor"
          bgImage="src/images/cyberViking.jpg"
        />
        <Square
          name="Cyber Odin"
          bgImage="src/images/cyberViking3.jpg"
        />
        <Square
          name="Cyber Freya"
          bgImage="src/images/cyberViking2.jpg"
        />
      </div>
    </main>
  );
}
