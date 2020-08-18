import React from 'react';
import { makeStyles, Link, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    backgroundColor: '#ece1ed',
    padding: '8px 0px',
    postion: 'fixed',
    bottom: 0,
    fontSize: theme.typography.fontSize * 0.8
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <span>
          Datasets from{' '}
          <Link href="https://justicehub.in/license/" target="_blank" rel="noopener" underline="always">
            Justice Hub
          </Link>
        </span>
        <span>
          India GEOJSON from{' '}
          <Link
            href="https://un-mapped.carto.com/tables/states_india/public/map"
            target="_blank"
            rel="noopener"
            underline="always"
          >
            Carto
          </Link>
        </span>
      </Container>
    </div>
  );
};

export default Footer;
