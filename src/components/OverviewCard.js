import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  number: {
    fontSize: theme.typography.fontSize * 2,
    fontWeight: 700,
    color: '#F65940'
  },
  text: {
    margin: '0'
  }
}));

const OverviewCard = ({ text, total }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <p className={classes.text}>{text}</p>
        <span className={classes.number}>{total}</span>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
