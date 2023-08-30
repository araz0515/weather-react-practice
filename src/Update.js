import React from "react";

export default function Update() {
  let date = "Tuesday 10:00";
  return (
    <div className="Update">
      Last updated: <span id="date">{date}</span>
    </div>
  );
}
