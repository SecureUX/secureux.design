import { FC, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Grid } from "@mui/material";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Menu } from "./Menu";
import { useAppContext } from "./AppProvider";

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  const currentPhase = router.asPath.split("/")[1];
  const chapter = router.asPath.split("/")[2];
  const {
    colors: { red, mintGreen, mustardYellow, lavender, lightBlue },
  } = useAppContext();
  const [scrollPosition, setScrollPosition] = useState(0);
  useScrollPosition(
    ({ currPos }) => {
      setScrollPosition((currPos.y / (document.body.scrollHeight - 400)) * 100);
    },
    [],
    null,
    true
  );
  const phases = {
    centering: { color: red, number: 1 },
    research: { color: mintGreen, number: 2 },
    prototyping: { color: mustardYellow, number: 3 },
    launching: { color: lavender, number: 4 },
    future: { color: lightBlue, number: 5 },
  };

  const title = chapter
    ? `${currentPhase} – chapter ${chapter}`
    : currentPhase || "human rights centered design - home".toUpperCase();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Based on extensive research, we are offering: best practices, use cases, and knowledge from human rights activists, community organizers, and technologists from across the globe."
        />
        <title>{title.toUpperCase()}</title>
      </Head>
      <Menu currentPhase={phases[currentPhase]?.number} />
      {Object.keys(phases).includes(currentPhase) ? (
        <Box
          sx={{
            position: "fixed",
            width: "120%",
            maxWidth: "120%",
            height: "40px",
            marginTop: "-40px",
            marginLeft: "56px",
            opacity: 0.95,
            background: `linear-gradient(to right, #fff 0%, ${
              phases[currentPhase]?.color
            } ${scrollPosition}%, #fff ${scrollPosition + 0.0001}%)`,
          }}
        />
      ) : null}
      <Box sx={{ m: "40px", ml: "80px", maxWidth: 1200 }}>
        <Grid
          container
          columns={8}
          columnSpacing="20px"
          direction="row"
          wrap="wrap"
          justifyContent="flex-end"
          alignContent="flex-end"
        >
          {children}
        </Grid>
      </Box>
    </>
  );
};
