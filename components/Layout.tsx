import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Menu } from "./Menu";
import { useAppContext } from "./AppProvider";

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  const currentChapter = router.asPath.split("/")[1];
  const {
    colors: { lightBlue },
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
  const chapters = [
    "research",
    "ideation",
    "prototyping",
    "launching",
    "future",
  ];

  return (
    <>
      <Menu />
      {chapters.includes(currentChapter) ? (
        <Box
          sx={{
            position: "fixed",
            width: "102%",
            height: 46,
            marginTop: "-40px",
            marginLeft: "58px",
            opacity: 0.95,
            background: `linear-gradient(to right, #fff 0%, ${lightBlue} ${scrollPosition}%, #fff ${
              scrollPosition + 0.0001
            }%)`,
          }}
        />
      ) : null}
      <Box sx={{ m: "40px", ml: "100px", maxWidth: 1200 }}>
        <Grid
          container
          columns={8}
          columnSpacing={2}
          direction="row"
          wrap="wrap"
          justifyContent="flex-end"
        >
          {children}
        </Grid>
      </Box>
    </>
  );
};