import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'relative',
    width: '120px',
    height: '120px',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    margin: '0 50px',

    '&:hover div::after': {
      width: '50px',
      height: '50px',
      top: '60px',
      left: '110px',
    },
    '&:hover div::before': {
      width: '100px',
      height: '100px',
      top: '50%',
      left: '50%',
    },
    '&:hover div > span:nth-of-type(1)': {
      width: '80px',
      height: '80px',
      top: '-20px',
      left: '-40px',
    },
    '&:hover div > span:nth-of-type(2)': {
      width: '50px',
      height: '50px',
      top: '80px',
      left: '-40px',
    },
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: '16px',
    fontWeight: 'lighter',
    color: theme.palette.common.white,
    zIndex: 10,
  },
  blurred: {
    position: 'relative',
    top: 0,
    left: 0,
    width: '120px',
    height: '120px',
    borderRadius: '100%',
    filter: `url(#goo)`,
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: '#555',
      borderRadius: '100%',
      transition: '1.5s cubic-bezier(0,2,.61,-.05)',
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: '#555',
      borderRadius: '100%',
      transition: '1.7s cubic-bezier(0,2,.61,-.05)',
    },
    '& > span:nth-of-type(1),& > span:nth-of-type(2)': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '120px',
      height: '120px',
      background: '#555',
      borderRadius: '100%',
      transition: '1.4s cubic-bezier(0,2,.61,-.05)',
    },
  },
}));

const LiquidButton = ({ text, to }) => {
  const classes = useStyles();
  return (
    <Link to={`${to}`}>
      <button className={classes.button}>
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
        <div className={classes.blurred}>
          <span></span>
          <span></span>
        </div>
      </button>
      <svg style={{ position: 'absolute' }}>
        <defs>
          <filter id="goo" className={classes.svg}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="name"
            />
            <feColorMatrix
              in="name"
              mode="matrix"
              values="1 0 0 0 0
                0 1 0 0 0 
                0 0 1 0 0
                0 0 0 30 -15 "
              result="aab"
            />
            <feBlend in="SourceGraphic" in2="aab" />
          </filter>
        </defs>
      </svg>
    </Link>
  );
};

export default LiquidButton;
