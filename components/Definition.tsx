import { useState, useEffect } from "react";
import Router from "next/router";
import { Box, Grid } from "@mui/material";

export const Definition = ({ id, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window && window?.location?.hash === `#${id}`);
    };
    Router.events.on("hashChangeStart", updateVisibility);
    return () => {
      Router.events.off("hashChangeComplete", updateVisibility);
    };
  }, [id, visible]);

  return visible ? (
    <Grid item xs={2} sx={{ mt: "40px", mb: "10px" }}>
      <Box
        id={id}
        sx={{
          transition: "opacity 0.5s ease-in-out",
          fontWeight: 400,
          color: "#0000ff",
          fontSize: "18px",
          width: "100%",
          border: "1px solid #0000ff",
          borderRadius: "50px",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {children}
      </Box>
    </Grid>
  ) : null;
};
