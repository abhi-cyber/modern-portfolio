import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="A" transform="translate(35.000000, 35.000000)">
          <path
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12M7 13h10"
          />
        </g>
        <polygon
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="50,5 11,27 11,72 50,95 89,73 89,28"
        />
      </g>
    </svg>
  );
}

export default Logo;
