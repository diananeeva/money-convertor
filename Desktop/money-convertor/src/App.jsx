import React from "react";
import MoneyConvertor from "./components/MoneyConvertor";
import ExchangeRateChart from "./components/charts/ExchangeRateChart"; // Импортиране на диаграмата
import { Container, Box, Typography } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/images/digital.avif')", // Фоново изображение
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2, // Добавете padding, за да не е твърде близо до краищата
      }}
    >
      <Container
        maxWidth="lg" // Увеличавам ширината на контейнера за повече място
        sx={{
          display: "flex",
          justifyContent: "space-between", // Разпределяне на съдържанието
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: 3, // Добавяне на малка сянка за по-добър ефект
        }}
      >
        {/* Лявата част с конвертора */}
        <Box sx={{ flex: 1, paddingRight: 2 }}>
          <MoneyConvertor />
        </Box>

        {/* Дясната част с диаграмата */}
        <Box sx={{ flex: 1 }}>
          <ExchangeRateChart />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
