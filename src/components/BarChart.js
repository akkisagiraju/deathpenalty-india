import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import { useChartStyles } from '../styles/styles';

const BarChart = ({ title, data, label, mini }) => {
  const classes = useChartStyles();

  const xLabel = label || 'Number of persons charged';

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: xLabel,
        backgroundColor: 'rgb(66, 54, 67)',
        //   backgroundColor: Object.keys(freqencyOfOffences).map((v, i) =>
        //   i === 0 ? 'rgb(246, 89, 64)' : 'rgb(66, 54, 67)'
        // ),
        borderColor: 'rgb(66, 54, 67)',
        borderWidth: 1,
        maxBarThickness: 50,
        hoverBackgroundColor: 'rgb(246, 89, 64)',
        hoverBorderColor: 'rgb(66, 54, 67)',
        data: Object.values(data)
      }
    ]
  };

  const setTicks = () => {
    if (mini) {
      return {
        beginAtZero: true,
        stepSize: 1
      };
    }
    return {
      beginAtZero: true
    };
  };

  const options = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false
          },
          ticks: setTicks(),
          position: 'top',
          scaleLabel: {
            display: true,
            labelString: xLabel
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            drawOnChartArea: false
          }
        }
      ]
    }
  };

  return (
    <div className={classes.root}>
      <Typography>{title || 'Title'}</Typography>
      <HorizontalBar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
