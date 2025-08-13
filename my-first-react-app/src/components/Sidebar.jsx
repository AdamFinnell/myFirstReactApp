import React from "react";

export default function Sidebar({ color, setColor }) {
  const colors = [
    "Magenta", 
    "Cyan",  
    "Limegreen"  
  ];

  return (
    <aside style={{ backgroundColor: color, width: "200px", padding: "16px" }}>
      <h3>Choose Sidebar Color</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {colors.map((color, index) => (
          <li
            key={index}
            onClick={() => setColor(color)}
            style={{
              backgroundColor: color,
              padding: "8px",
              margin: "5px 0",
              cursor: "pointer",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            {color}
          </li>
        ))}
      </ul>
    </aside>
  );
}
