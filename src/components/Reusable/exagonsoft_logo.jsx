import React from "react";

const Exagonsoft_logo = ({ width = "256", height = "64" }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        rx="5"
        ry="5"
        fill="yellow"
      />

      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="black"
        font-size={parseInt(width) /10}
        font-weight="bold"
      >
        EXAGON-SOFT
      </text>
    </svg>
  );
};

export default Exagonsoft_logo;
