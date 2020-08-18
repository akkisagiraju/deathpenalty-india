import React from 'react';
import { makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#c8bbc9',
    textAlign: 'center',
    padding: '8px 0px',
    fontSize: theme.typography.fontSize * 0.75
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      Made by{' '}
      <Link href="https://github.com/akkisagiraju" target="_blank" rel="noopener" color="inherit">
        Akhil
      </Link>
    </div>
  );
};

export default Footer;
