import React, { useState } from "react";
import { TextField, Button, Box, Typography, Select, MenuItem } from "@mui/material";
import axios from "axios";

const MoneyInput = () => {
  const [amount, setAmount] = useState(""); 
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = async () => {
    if (fromCurrency !== "EUR") {
      alert(
        "Oops! Due to API limitations, only EUR can be used as the base currency. Please select EUR as the base."
      );
      return;
    }

    const apiUrl = `https://api.allorigins.win/raw?url=https://api.exchangeratesapi.io/v1/latest?access_key=b08a9c7c2ca34eee8e4c6d31fac846ab&symbols=${toCurrency}`;

    try {
      const response = await axios.get(apiUrl);
      const rate = response.data.rates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    } catch (error) {
      console.error("Error fetching exchange rates", error);
      alert("Failed to convert currencies. Please check your inputs or try again later.");
    }
  };

  
  const handleAmountChange = (e) => {
    
    if (e.target.value === "") {
      setAmount("");
    } else {
      
      setAmount(Math.max(0, e.target.value));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        padding: 2,
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" color="primary" gutterBottom>
        Enter Amount and Select Currencies
      </Typography>
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={handleAmountChange} 
        fullWidth
        inputProps={{
          min: 0, 
          step: "any", 
        }}
        sx={{
          '& input[type="number"]::-webkit-outer-spin-button, & input[type="number"]::-webkit-inner-spin-button': {
            WebkitAppearance: "none",
            margin: 0,
          },
          '& input[type="number"]': {
            MozAppearance: "textfield", 
          },
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          fullWidth
        >
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="JPY">JPY</MenuItem>
        </Select>
        <Select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          fullWidth
        >
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="JPY">JPY</MenuItem>
        </Select>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleConvert}
        sx={{ marginTop: 2 }}
      >
        Convert
      </Button>
      {convertedAmount !== null && (
        <Typography variant="body1" sx={{ marginTop: 2, color: 'blue' }}>
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </Typography>
      )}
    </Box>
  );
};

export default MoneyInput;

