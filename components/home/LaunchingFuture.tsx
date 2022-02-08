import { FC } from "react";
import Link from "next/link";
import { useAppContext } from "components/AppProvider";

export const LaunchingFuture: FC = () => {
  const {
    colors: { white, black, lavender, darkLavender, lightBlue, darkLightBlue },
  } = useAppContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 985 560"
    >
      <style>
        {`.launching { fill: ${lavender} }
          .launching:hover { fill: ${darkLavender} }
          .launching-title { font-weight: bold; font-size: 26px; font-family: Helvetica; fill: ${black}; }
          .launching:hover ~ .launching-title { fill: ${white}; }
          .future { fill: ${lightBlue} }
          .future:hover { fill: ${darkLightBlue}; }
          .future-title { font-weight: bold; font-size: 26px; font-family: Helvetica; fill: ${black}; }
          .future:hover ~ .future-title { fill: ${white}; }`}
      </style>
      <Link href="/future/" passHref>
        <rect
          x="15"
          y="15"
          width="470"
          height="270"
          ry="235"
          rx="135"
          className="future"
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

      <text x="74" y="160" className="future-title">
        5 LOOKING TO THE FUTURE
      </text>
      <Link href="/launching/" passHref>
        <rect
          x="500"
          y="280"
          width="470"
          height="270"
          ry="235"
          rx="135"
          className="launching"
          cursor="pointer"
        />
      </Link>
      <text
        x="730"
        y="420"
        className="launching-title"
        textAnchor="middle"
        dominantBaseline="central"
      >
        4 LAUNCHING
      </text>
      <path
        d="M 725 280
             L 610,280
             A 130 130, 0, 0, 1, 485 150
             A 130 130, 0, 0, 0, 360 15
             L 240,15"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 165 15
          L 140 15,
          A 130 130, 0, 0, 0, 165 285
          L 360 285
          A 130 130 0 0 1 500 420
          A 130 130 0 0 0 630 550"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 720 550
        L840,550
        A 130 130, 0, 0, 0, 970 410
        A 130 130, 0, 0, 0, 840 280"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};
