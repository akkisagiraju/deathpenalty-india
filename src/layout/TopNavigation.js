import React from 'react';
import { Container, Grid, Button, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/', name: 'Overview' },
  { path: '/supreme-court', name: 'Supreme Court' },
  { path: '/high-courts', name: 'High Courts' }
];

const useStyles = makeStyles((theme) => ({
  topNav: {
    padding: '12px 0',
    border: `${theme.palette.primary.main} solid 1px`
  },
  button: {
    transition: '0.2s all ease-in',
    border: `${theme.palette.background.default} solid 1px`,

    '&:hover': {
      border: `${theme.palette.primary.main} solid 1px`,
      backgroundColor: '#FFF'
    }
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    color: '#FFF',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  }
}));

const TopNavigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.topNav}>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center">
          {navLinks.map((link) => (
            <Grid lg={4} item style={{ textAlign: 'center' }} key={link.path}>
              <Button
                to={link.path}
                exact={true}
                activeClassName={classes.active}
                className={classes.button}
                component={NavLink}
              >
                {link.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default TopNavigation;
