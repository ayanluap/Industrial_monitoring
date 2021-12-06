import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

import greeting from '../../../assets/dashboard/1.svg';

const useStyles = makeStyles((theme) => ({
  greeting: {
    background: theme.palette.custom.yellow,
    borderRadius: '5px',
    padding: '15px 20px',
    minHeight: '80px',
    height: '15vh',
    position: 'relative',
  },
  img: {
    position: 'absolute',
    right: '10px',
    top: -15,
    height: '120%',
  },
}));

const Greetings = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box
      mt={3}
      className={classes.greeting}
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
    >
      <Typography variant="h6" color={theme.palette.warning.dark}>
        Good Morning!
      </Typography>
      <Typography variant="body1" color={theme.palette.warning.dark}>
        Hope you all are doing great.
      </Typography>

      <img src={greeting} className={classes.img} alt="greeting" />
    </Box>
  );
};

export default Greetings;
