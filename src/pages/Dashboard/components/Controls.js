import { useTheme } from '@emotion/react';
import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  box: {
    minHeight: '135px',
    padding: '10px',
    boxShadow: theme.shadows[3],
  },
}));

const Controls = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container spacing={1} mt={1}>
      <Grid item md={6} xs={6}>
        <Paper
          className={classes.box}
          style={{ background: theme.palette.custom.purple }}
        ></Paper>
      </Grid>
      <Grid item md={6} xs={6}>
        <Paper
          className={classes.box}
          style={{ background: theme.palette.custom.orange }}
        ></Paper>
      </Grid>
    </Grid>
  );
};

export default Controls;
