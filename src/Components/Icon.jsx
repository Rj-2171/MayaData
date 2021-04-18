import React from "react";
import "./Icon.css";

export default function Icon({ svg: Svg }) {
  return (
    <div className="icon">
      <Svg />
    </div>
  );
}
