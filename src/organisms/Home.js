import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useScreenResolution } from "../hooks/ResponsiveHook";

const AvgComponent = ({ type = "", data = "" }) => (
  <Box
    sx={{
      height: { xs: "8vh", lg: "20vh" },
      padding: "5px",
      borderRadius: "10px",
      width: "100%",
      background: "#fd8200",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: " column",
    }}
  >
    <Typography>{type} Average ROI</Typography>
    <Typography> {data} %</Typography>
  </Box>
);

const Home = () => {
  const { isDesktopOrLaptop, isTabletOrMobile } = useScreenResolution();
  const stackDirection = () => {
    let direction = "column";
    switch (true) {
      case isDesktopOrLaptop:
        direction = "row";
        break;
      case isTabletOrMobile:
        direction = "column";
        break;
      default:
        direction = "row";
        break;
    }
    return direction;
  };

  return (
    <Stack>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: { xs: "30vh", lg: "50vh" } }}
      >
        <Grid item xs={6} lg={3}>
          <AvgComponent data="3" key={1} type="Monthly" />
        </Grid>
        <Grid item xs={6} lg={3}>
          <AvgComponent data="2" key={2} type="Weekly" />
        </Grid>
      </Grid>
      <Grid item xs={3} lg={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fd8200",
            color:'#fff',
            height: "20vh",
          }}
        >
          <Typography align="center" variant="h5">
            Join our Trading System now
          </Typography>
        </Box>
      </Grid>
    </Stack>
  );
};

export default Home;
