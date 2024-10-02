// src/components/DiscResultGraph.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DiscResultGraph = ({ discResult }) => {
  const data = {
    labels: ['Dominance', 'Influence', 'Steadiness', 'Conscientiousness'],
    datasets: [
      {
        label: 'DISC Assessment Results',
        data: [discResult.D, discResult.I, discResult.S, discResult.C],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Your DISC Assessment Results</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DiscResultGraph;
