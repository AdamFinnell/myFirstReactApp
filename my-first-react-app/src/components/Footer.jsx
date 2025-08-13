import React from "react";

export default function Footer() {
  return (
    <footer style={{ padding: "1rem", textAlign: "center" }}>
      © {new Date().getFullYear()} Dev_Finn's. All rights reserved.
    </footer>
  );
}
