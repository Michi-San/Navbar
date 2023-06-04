import React from "react";

export default function Content() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h1>{Array(10000).fill("Lorem ipsum dolor sit amet, ").join("")}</h1>
    </div>
  );
}
