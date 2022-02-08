import { FC } from "react";
import Link from "next/link";
import { useAppContext } from "components/AppProvider";

export const Centering: FC = () => {
  const {
    colors: { black, white, red, darkRed },
  } = useAppContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 500 300"
    >
      <style>
        {`.centering { fill: ${red} }
            .centering:hover { fill: ${darkRed}; }
            .centering-title { font-weight: bold; font-size: 26px; font-family: Helvetica; fill: ${black}; }
            .centering:hover ~ .centering-title { fill: ${white}; }`}
      </style>
      <Link href="/centering/" passHref>
        <rect
          x="15"
          y="15"
          width="470"
          height="270"
          ry="235"
          rx="135"
          className="centering"
          cursor="pointer"
        />
      </Link>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="0"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 7 3.5, 0 7"     cursor="pointer"/>
      </marker>
      <path
        d="M150,285 A 1 1 0 0 1 150 15 L285,15"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M350,15 A 1 1 0 0 1 350 285 L220,285"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
      <text x="58" y="160" className="centering-title">
        1 CENTERING HUMAN RIGHTS
      </text>
    </svg>
  );
};
