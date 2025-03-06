import React from "react";
import MoneyConvertor from "./components/MoneyConvertor";
import ExchangeRateChart from "./components/charts/ExchangeRateChart"; 
import { Container, Box, Typography } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('./images/digital.avif')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2, 
      }}
    >
      <Container
        maxWidth="lg" 
        sx={{
          display: "flex",
          justifyContent: "space-between", 
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: 3, 
        }}
      >
        
        <Box sx={{ flex: 1, paddingRight: 2 }}>
          <MoneyConvertor />
        </Box>

       
        <Box sx={{ flex: 1 }}>
          <ExchangeRateChart />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
