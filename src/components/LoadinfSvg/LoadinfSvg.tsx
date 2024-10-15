import React from "react";

const LoadinfSvg = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="25"
        height="25"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <circle
            stroke-dasharray="164.93361431346415 56.97787143782138"
            r="35"
            stroke-width="10"
            stroke="#ffffff"
            fill="none"
            cy="50"
            cx="50"
          >
            <animateTransform
              keyTimes="0;1"
              values="0 50 50;360 50 50"
              dur="1s"
              repeatCount="indefinite"
              type="rotate"
              attributeName="transform"
            ></animateTransform>
          </circle>
          <g></g>
        </g>
      </svg>
    </div>
  );
};

export default LoadinfSvg;
