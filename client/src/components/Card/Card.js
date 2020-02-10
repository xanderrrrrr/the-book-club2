import React from "react";
// import "./style.css";

// This file exports both the List and ListItem components

export function Card({ children }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4">
        <div className="px-3 py-2">
            <div className="mb-1 text-center">{children}</div>
        </div>
  </div>
  );
}


