import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";
import { BASE_API } from "../../utils/const";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [_, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const sendDataToServer = (username: string, password: string) => {
    const dataToSend = {
      name: username,
      password: password,
    };

    setIsLoading(true);

    fetch(`${BASE_API}` + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedIn(true); // Redirect to home
          navigate("/");
        } else {
          throw new Error("Login failed");
        }
      })
      .catch((error) => {
        setError(
          "Login failed. Please check your credentials." + error.message
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = () => {
    setError("");
    console.log("Username:", username);
    console.log("Password:", password);
    sendDataToServer(username, password);
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: "20px" }}>
        {error && (
          <Typography variant="body2" color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          {isLoading && <CircularProgress />}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
