import React from "react";

const Next_logo = ({ width = "256", height = "64" }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100%" height="100%" fill="black" rx="5" ry="5" />

      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="white"
        font-size={parseInt(width) / 10}
        font-weight="bold"
      >
        NEXT js
      </text>

      <g stroke="rgba(255, 255, 255, 0.5)">
        <line x1="0" y1="10" x2="256" y2="10" stroke-width="0.3" />
        <line x1="0" y1="20" x2="256" y2="20" stroke-width="0.3" />
        <line x1="0" y1="30" x2="256" y2="30" stroke-width="0.3" />
        <line x1="0" y1="40" x2="256" y2="40" stroke-width="0.3" />
        <line x1="0" y1="50" x2="256" y2="50" stroke-width="0.3" />
        <line x1="0" y1="60" x2="256" y2="60" stroke-width="0.3" />
      </g>

      <g stroke="rgba(255, 255, 255, 0.5)">
        <line x1="25" y1="0" x2="25" y2="64" stroke-width="0.3" />
        <line x1="50" y1="0" x2="50" y2="64" stroke-width="0.3" />
        <line x1="75" y1="0" x2="75" y2="64" stroke-width="0.3" />
        <line x1="100" y1="0" x2="100" y2="64" stroke-width="0.3" />
        <line x1="125" y1="0" x2="125" y2="64" stroke-width="0.3" />
        <line x1="150" y1="0" x2="150" y2="64" stroke-width="0.3" />
        <line x1="175" y1="0" x2="175" y2="64" stroke-width="0.3" />
        <line x1="200" y1="0" x2="200" y2="64" stroke-width="0.3" />
        <line x1="225" y1="0" x2="225" y2="64" stroke-width="0.3" />
        <line x1="250" y1="0" x2="250" y2="64" stroke-width="0.3" />
      </g>
    </svg>
  );
};

export default Next_logo;
