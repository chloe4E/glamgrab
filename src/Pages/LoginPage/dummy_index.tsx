import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BASE_API } from "../../utils/const";

function DummyHello() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Request URL:", "http://localhost:3000/hello");

    // Make an API request to the Go backend
    fetch(`${BASE_API}` + "/hello", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error:" + error);
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

export default DummyHello;
