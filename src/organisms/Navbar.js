import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Stack, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { ClickableTypography } from "../atoms/StyledComponents";
import { useScreenResolution } from "../hooks/ResponsiveHook";
import { resetFileData } from "../store/slices/FileDataSlice";
import { updateLoaderFields } from "../store/slices/LoaderSlice";
import { updateLoginFields } from "../store/slices/LoginSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isDesktopOrLaptop } = useScreenResolution();
  const loggedIn = useSelector(({ login }) => login.loggedIn);

  const navigateReports = () => {
    dispatch(resetFileData());
    navigate("/reports", { replace: true });
  };

  const navigateUpload = () => {
    if (!loggedIn) {
      dispatch(
        updateLoaderFields({ alertText: " Please Login!", severity: "error" })
      );
    }
    dispatch(resetFileData());
    navigate("/upload");
  };

  const navigateLogin = () => {
    if (!loggedIn) navigate("/login");
    else {
      dispatch(updateLoginFields({ loggedIn: false, email: "", password: "" }));
      dispatch(updateLoaderFields({ alertText:"Logged out successfully", severity:"success" }));
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1a1a1a" }}>
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: isDesktopOrLaptop
              ? "space-around"
              : "space-between",
            cursor: "pointer",
          }}
        >
          <Box onClick={() => navigate("/")}>
            <img src={logo} alt="Money Rho" className="logo-image" />
          </Box>
          <Typography align="left" variant="h6" onClick={navigateReports}>
            Reports
          </Typography>
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={3}
            direction="row"
          >
            {loggedIn && (
              <Stack
                alignItems="center"
                justifyContent="center"
                direction="row"
              >
                <ClickableTypography
                  onClick={navigateUpload}
                  variant="h6"
                  alignItems="center"
                >
                  Upload
                </ClickableTypography>
                <FileUploadIcon
                  onClick={navigateUpload}
                  sx={{ color: "#fb4b04" }}
                />
              </Stack>
            )}
            <ClickableTypography
              onClick={navigateLogin}
              variant="h6"
              alignItems="center"
            >
              {loggedIn ? "Logout" : "Admin"}
            </ClickableTypography>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
