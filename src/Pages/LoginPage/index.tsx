import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function LoginPage2() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Make an API request to the Go backend
    fetch("/hello")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        console.error("Error");
      });
  }, []);

  return (
    <Box className="App-header">
      <Typography variant="h6" m={1}>
        Welcome to Glamgrab
      </Typography>
      <p>{message}</p>
    </Box>
  );
}

export default LoginPage2;
