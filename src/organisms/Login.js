import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/FileService";
import { updateLoginFields } from "../store/slices/LoginSlice";

export const STYLED_TYPO_PROPS = {
  "& input": {
    color: "#fff",
  },
  "&& fieldset": {
    border: "1px solid #fff",
  },
  "&& label": {
    color: "#fff",
  },
  "&:hover": {
    "&& fieldset": {
      border: "3px solid #FF4A17",
    },
  },
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = useSelector(({ login }) => login);

  const handleChange = (e) => {
    dispatch(
      updateLoginFields({
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleLogin = async () => {
    if (!email || !password) return;
    const user = await loginUser(email, password);
    if (user) {
      navigate("/upload", { replace: true });
    }
  };

  React.useEffect(() => {
    return () => {
      dispatch(
        updateLoginFields({
          email: "",
          password: "",
        })
      );
    };
  }, [dispatch]);

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "70vh",
          width: { lg: "50%", xs: "100%" },
          margin: "0 auto",
        }}
      >
        <Grid item xs={3} lg={4}>
          <Typography variant="h5" fontWeight={700}>
            Login
          </Typography>
        </Grid>
        <Grid item xs={3} lg={4}>
          <TextField
            autoComplete="off"
            fullWidth
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
            sx={STYLED_TYPO_PROPS}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            autoComplete="off"
            fullWidth
            label="Password"
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            sx={STYLED_TYPO_PROPS}
          />
        </Grid>
        <Grid item xs={3}>
          <Button onClick={handleLogin} variant="contained">
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
