import { FC, useState, useEffect } from "react";
import Router from "next/router";
import NextLink from "next/link";
import { Grid, Drawer, Box, IconButton } from "@mui/material";
import {
  Menu as MenuIcon,
  Twitter as TwitterIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import LogoWhite from "public/images/logo-white-vertical.svg";
import LogoSmallWhite from "public/images/uxs-icon-1-white.svg";
import { PhaseAccordion } from "components/PhaseAccordion";
import { useAppContext } from "components/AppProvider";
import { breakSmall } from "styles/theme";

const Link = ({ href, children, ...props }) => (
  <NextLink href={href} passHref {...props}>
    <Box onClick={(e: any) => e.stopPropagation()}>{children}</Box>
  </NextLink>
);

type MenuProps = {
  currentPhase: number;
};

export const Menu: FC<MenuProps> = ({ currentPhase }) => {
  const {
    typography: { h1, h5 },
    colors: { white, brightBlue },
    useMobile,
  } = useAppContext();
  const isMobile = useMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedPhase, setExpandedPhase] = useState(currentPhase);
  const toggleExpandedPhase = (phase: number) => {
    if (phase === expandedPhase) {
      setExpandedPhase(0);
    } else {
      setExpandedPhase(phase);
    }
  };
  const mainMenuItemStyles = {
    ...h1,
    pl: "12px",
    pb: "6px",
    "& a": { color: white },
    "& a:hover": { color: brightBlue },
  };
  const chapterStyles: any = {
    fontFamily: "Helvetica, sans-serif",
    fontSize: 20,
    textTransform: "uppercase",
    cursor: "pointer",
    ml: "30px",
    "& a": {
      color: white,
    },
    "& :hover": {
      color: `${brightBlue} !important`,
    },
    "& a:visited": {
      color: white,
    },
  };

  useEffect(() => {
    setExpandedPhase(currentPhase);
  }, [currentPhase]);

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
    };
    Router.events.on("routeChangeComplete", closeMenu);
    return () => {
      Router.events.off("routeChangeComplete", closeMenu);
    };
  }, []);

  const desktopMenuWidth = "75vw";
  const mobileMenuWidth = "100%";
  const closedDesktopMenuWidth = "60px";
  const closedMobileMenuWidth = "40px";

  return (
    <Drawer
      sx={{
        position: "absolute",
        overflow: "hidden",
        scrollbarWidth: "none",
        backgroundColor: "black",
        width: menuOpen ? desktopMenuWidth : closedDesktopMenuWidth,
        [breakSmall]: {
          width: menuOpen ? mobileMenuWidth : closedMobileMenuWidth,
        },
        maxWidth: "900px",
        transition: "width 0.25s ease-in-out",
        height: "100vh",
        "& .MuiDrawer-paper": {
          width: menuOpen ? desktopMenuWidth : closedDesktopMenuWidth,
          pr: closedDesktopMenuWidth,
          [breakSmall]: {
            width: menuOpen ? mobileMenuWidth : closedMobileMenuWidth,
            pr: closedMobileMenuWidth,
          },
          maxWidth: "900px",
          transition: "width 0.25s ease-in-out",
          backgroundColor: "black",
          overflow: "hidden",
          scrollbarWidth: "none",
          "& ::-webkit-scrollbar": {
            width: "0px",
          },
        },
      }}
      variant="permanent"
      anchor="left"
      open={menuOpen}
    >
      <Grid
        container
        direction="column"
        wrap="nowrap"
        sx={{
          height: "100%",
          width: "100%",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollbarWidth: "none",
          padding: "20px",
          marginRight: "100px",
          display: menuOpen ? "inherit" : "none",
        }}
      >
        <Grid item>
          <Box sx={mainMenuItemStyles}>
            <Link href="/">Home</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={mainMenuItemStyles}>
            <Link href="/about">About</Link>
          </Box>
        </Grid>

        <Grid item>
          <PhaseAccordion
            title="Introduction"
            phase={0}
            expandedPhase={expandedPhase}
            toggleExpandedPhase={toggleExpandedPhase}
          >
            <Box sx={chapterStyles}>
              <Link href="/introduction/how-to-use">How to Use</Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/introduction/intro">Intro</Link>
            </Box>
          </PhaseAccordion>
        </Grid>

        <Grid item>
          <PhaseAccordion
            title="Centering Human Rights"
            phase={1}
            expandedPhase={expandedPhase}
            toggleExpandedPhase={toggleExpandedPhase}
          >
            <Box sx={chapterStyles}>
              <Link href="/centering/">Overview</Link>
            </Box>

            <Box sx={chapterStyles}>
              <Link href="/centering/1" onClick={undefined}>
                Chapter 1 – Figuring Out the Problem
              </Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/centering/2">
                Chapter 2 — Working With a Community
              </Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/centering/3">
                Chapter 3 – Understanding Harm (Threat Modeling)
              </Link>
            </Box>
          </PhaseAccordion>
        </Grid>

        <Grid item>
          <PhaseAccordion
            title="Conducting Research"
            phase={2}
            expandedPhase={expandedPhase}
            toggleExpandedPhase={toggleExpandedPhase}
          >
            <Box sx={chapterStyles}>
              <Link href="/research/">Overview</Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/research/4">Chapter 4 – Research</Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/research/5">Chapter 5 – Designing for Everyone</Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/research/6">Chapter 6 – Personas</Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/research/7">
                Chapter 7 – Ideation / Validating Research Findings
              </Link>
            </Box>
          </PhaseAccordion>
        </Grid>

        <Grid item>
          <PhaseAccordion
            title="Prototyping"
            phase={3}
            expandedPhase={expandedPhase}
            toggleExpandedPhase={toggleExpandedPhase}
          >
            <Box sx={chapterStyles}>
              <Link href="/prototyping/">Overview</Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/prototyping/8">
                Chapter 8 – Community Feedback and Testing
              </Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/prototyping/9">
                Chapter 9 – Revising the Prototype
              </Link>
            </Box>
          </PhaseAccordion>
        </Grid>

        <Grid item>
          <PhaseAccordion
            title="Launching"
            phase={4}
            expandedPhase={expandedPhase}
            toggleExpandedPhase={toggleExpandedPhase}
          >
            <Box sx={chapterStyles}>
              <Link href="/launching/">Overview</Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/launching/10">
                Chapter 10 – Integrating Feedback and Launching
              </Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/launching/11">Chapter 11 – Iteration</Link>
            </Box>
          </PhaseAccordion>
        </Grid>

        <Grid item>
          <PhaseAccordion
            title="Looking to Future"
            phase={5}
            expandedPhase={expandedPhase}
            toggleExpandedPhase={toggleExpandedPhase}
          >
            <Box sx={chapterStyles}>
              <Link href="/future/">Overview</Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/future/12" passHref>
                Chapter 12 – Sustainability
              </Link>
            </Box>
            <Box sx={chapterStyles}>
              <Link href="/future/13" passHref>
                Chapter 13 – Importance of This Work
              </Link>
            </Box>
          </PhaseAccordion>
        </Grid>

        <Grid item>
          <Box sx={mainMenuItemStyles}>
            <Link href="/resources">Resources</Link>
          </Box>
        </Grid>

        <Grid item>
          <Box sx={mainMenuItemStyles}>
            <Link href="/glossary">Glossary</Link>
          </Box>
        </Grid>

        <Grid
          item
          container
          direction="row"
          spacing="10px"
          sx={{ marginTop: "80px" }}
        >
          <Grid item sx={{ "& :hover": { color: brightBlue } }}>
            <Link href="https://twitter.com/rights_design" passHref>
              <IconButton sx={{ color: "white" }}>
                <TwitterIcon />
                <Box sx={{ ml: "8px" }}>Twitter</Box>
              </IconButton>
            </Link>
          </Grid>
          <Grid item sx={{ "& :hover": { color: brightBlue } }}>
            <Link href="mailto:secure.ux@gmail.com" passHref>
              <IconButton sx={{ color: "white" }}>
                <MailIcon />
                <Box sx={{ ml: "8px" }}>Email</Box>
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: closedDesktopMenuWidth,
          [breakSmall]: {
            width: closedMobileMenuWidth,
          },
          overflow: "hidden",
          scrollbarWidth: "none",
          height: "100%",
        }}
      >
        <Grid
          item
          container
          spacing={0}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          sx={{
            width: closedDesktopMenuWidth,
            [breakSmall]: {
              width: closedMobileMenuWidth,
            },
            height: "100%",
            overflow: "hidden",
            scrollbarWidth: "none",
          }}
        >
          <Grid item container>
            <Grid item>
              <IconButton
                size="large"
                onClick={() => setMenuOpen(!menuOpen)}
                sx={{ color: "white", mb: "6px" }}
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Link href="/" passHref>
                <Box
                  sx={{
                    ...h5,
                    color: "white",
                    ml: 0,
                    mb: 1,
                    [breakSmall]: {
                      fontSize: "12px",
                      ml: 0,
                    },
                  }}
                >
                  Home
                </Box>
              </Link>
            </Grid>
          </Grid>
          {isMobile ? (
            <Grid item onClick={() => setMenuOpen(!menuOpen)}>
              <img
                src={LogoSmallWhite.src}
                alt=""
                style={{
                  height: "32px",
                  margin: "0 auto",
                  marginLeft: "-4px",
                }}
              />
            </Grid>
          ) : (
            <Grid item onClick={() => setMenuOpen(!menuOpen)}>
              <img
                src={LogoWhite.src}
                alt=""
                style={{
                  maxHeight: "65vh",
                  maxWidth: "80%",
                  marginTop: "0 auto",
                  marginLeft: "4px",
                }}
              />
            </Grid>
          )}
          <Grid item />
        </Grid>
      </Box>
    </Drawer>
  );
};
