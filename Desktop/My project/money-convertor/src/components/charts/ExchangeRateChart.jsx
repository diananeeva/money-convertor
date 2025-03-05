import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Box } from '@mui/material';


const data = [
  { name: 'Mon', value: 1.1 },
  { name: 'Tue', value: 1.2 },
  { name: 'Wed', value: 1.15 },
  { name: 'Thu', value: 1.3 },
  { name: 'Fri', value: 1.25 },
];

const ExchangeRateChart = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: 4 }}>
    <Typography variant="h6" gutterBottom sx={{ color: "primary.main" }}>
  Currency Exchange Rate Over the Week (EUR to USD)
</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <Typography variant="body2" color="primary.main" sx={{ marginTop: 2 }}>
        The graph shows the exchange rate of EUR to USD over a 5-day period. The x-axis represents the days of the week, 
        while the y-axis shows the value of 1 EUR in USD.
      </Typography>
    </Box>
  );
};

export default ExchangeRateChart;


