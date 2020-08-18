import React from 'react';
import { AppBar, Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  centerText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64
  }
});

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container className={classes.centerText}>
        <Typography variant="h6">{title}</Typography>
      </Container>
    </AppBar>
  );
};

export default Header;
