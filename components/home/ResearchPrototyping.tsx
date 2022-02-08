import { FC } from "react";
import Link from "next/link";
import { useAppContext } from "components/AppProvider";

export const ResearchPrototyping: FC = () => {
  const {
    colors: {
      white,
      mintGreen,
      darkMintGreen,
      mustardYellow,
      darkMustardYellow,
    },
  } = useAppContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 870 760"
    >
      <style>
        {`.research { fill: ${mintGreen} }
            .research:hover { fill: ${darkMintGreen} }
            .research-title { font-weight: bold; font-size: 26px; font-family: Helvetica; fill: black; }
            .research:hover ~ .research-title { fill: ${white}; }
            .prototyping { fill: ${mustardYellow} }
            .prototyping:hover { fill: ${darkMustardYellow} }
            .prototyping-title { font-weight: bold; font-size: 26px; font-family: Helvetica; fill: black; }
            .prototyping:hover ~ .prototyping-title { fill: ${white};`}
      </style>
      <Link href="/research/" passHref>
        <rect
          x="15"
          y="15"
          width="570"
          height="270"
          ry="235"
          rx="135"
          className="research"
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
        <polygon points="0 0, 10 5, 0 10" />
      </marker>

      <text x="210" y="160" className="research-title">
        2 RESEARCH
      </text>
      <Link href="/prototyping/" passHref>
        <rect
          x="580"
          y="280"
          width="270"
          height="470"
          ry="135"
          rx="235"
          className="prototyping"
          cursor="pointer"
        />
      </Link>
      <text
        x="660"
        y="390"
        className="prototyping-title"
        textAnchor="middle"
        dominantBaseline="central"
        transform="rotate(90, 620, 480)"
      >
        3 PROTOTYPING
      </text>

      <path
        d="M 220 15
           L 450,15
           A 130 130, 0, 0, 1, 585 150
           A 130 130, 0, 0, 0, 715 280"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 770 290
           A 130 130, 0, 0, 1, 850 420
           L850,610
           A 1 1, 0, 0, 1, 580 620"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 580 570
        L 580,400
        A 130 130, 0, 0, 0, 450 285
        L 150,285
        A 1 1 0 0 1 150 15 L165,15"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};
