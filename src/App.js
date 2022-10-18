import "./styles.css";
import React from "react";
import Counter from "./Counter";
import Name from "./Name";
// Import the Name component here similar to the Counter above

export default function App() {
  return (
    <div className="App">
      <Name />
      {/* Render the Name component here after importing */}
      <Counter />
    </div>
  );
}
