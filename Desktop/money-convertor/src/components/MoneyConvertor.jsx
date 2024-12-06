import React from "react";
import MoneyInput from "./MoneyInput";
import { Typography, Box } from "@mui/material";

const MoneyConvertor = () => {
  return (
    <Box 
      sx={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        Currency Converter
      </Typography>
      <MoneyInput />
    </Box>
  );
};

export default MoneyConvertor;
