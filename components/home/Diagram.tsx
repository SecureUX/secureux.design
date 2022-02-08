import { Box } from "@mui/material";
import { Centering } from "components/home/Centering";
import { ResearchPrototyping } from "components/home/ResearchPrototyping";
import { LaunchingFuture } from "components/home/LaunchingFuture";
import Logo from "public/images/uxs-icon-1.svg";
import Hand from "public/images/uxs-icon-2.svg";
import Globe from "public/images/uxs-icon-3.svg";
import Eye from "public/images/uxs-icon-4.svg";
import { keyframes } from "@mui/system";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  from {
    opacity: 0.0;
  }
  to {
    opacity: 1.0;
  }
`;

export const Diagram = () => (
  <Box
    id="top"
    sx={{
      position: "relative",
      minHeight: "700px",
      width: "90%",
      aspectRatio: "3 / 2",
      m: "0 auto",
      mb: "100px",
    }}
  >
    <Box sx={{ width: "35%", position: "absolute", top: 0, left: "0%" }}>
      <Centering />
    </Box>

    <Box
      sx={{
        width: "60%",
        position: "absolute",
        top: 0,
        left: "45%",
      }}
    >
      <ResearchPrototyping />
    </Box>

    <Box
      sx={{
        width: "8%",
        position: "absolute",
        top: "85%",
        left: "90%",
        animationDelay: "0.25s",
        animation: `${pulse} 2s infinite ease-in-out`,
        animationDirection: "alternate",
      }}
    >
      <img src={Hand.src} alt="" />
    </Box>

    <Box
      sx={{
        width: "75%",
        position: "absolute",
        top: "43%",
        left: "10%",
      }}
    >
      <LaunchingFuture />
    </Box>

    <Box
      sx={{
        width: "20%",
        animation: `${spin} 10s infinite linear`,
        position: "absolute",
        top: "35%",
        left: "58%",
      }}
    >
      <img src={Logo.src} alt="" />
    </Box>

    <Box
      sx={{
        width: "8%",
        position: "absolute",
        top: "54%",
        left: 0,
        animationDelay: "0.5s",
        animation: `${pulse} 3s infinite ease-in-out`,
        animationDirection: "alternate",
      }}
    >
      <img src={Globe.src} alt="" />
    </Box>

    <Box
      sx={{
        width: "8%",
        position: "absolute",
        top: "6%",
        left: "91%",
        animation: `${pulse} 4s infinite ease-in-out`,
        animationDirection: "alternate",
      }}
    >
      <img src={Eye.src} alt="" />
    </Box>
  </Box>
);
