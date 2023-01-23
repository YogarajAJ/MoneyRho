import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/FileService";
import { updateLoginFields } from "../store/slices/LoginSlice";

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
      navigate("/reports", { replace: true });
    }
  };

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "70vh" }}
    >
      <Grid item xs={3} lg={4}>
        <TextField
          autoComplete="off"
          fullWidth
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
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
        />
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleLogin} variant="contained">
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
