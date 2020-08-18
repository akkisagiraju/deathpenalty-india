import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import { useChartStyles } from '../styles/styles';

const PieChart = ({ title, data }) => {
  const classes = useChartStyles();

  // const sortedKeys = Object.keys(data).sort();
  // const sortedValues = sortedKeys.map((key) => data[key]);

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
        hoverBackgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']
      }
    ]
  };

  return (
    <div className={classes.root}>
      <Typography>{title || 'Title'}</Typography>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
