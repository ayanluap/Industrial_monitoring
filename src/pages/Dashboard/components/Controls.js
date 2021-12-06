import { useTheme } from '@emotion/react';
import { Grid, Paper, Switch, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

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
    <Grid container spacing={1} mt={1} alignItems="center">
      <Grid item md={6} xs={6}>
        <Paper
          className={classes.box}
          style={{ background: theme.palette.custom.purple }}
        >
          <LocalFireDepartmentOutlinedIcon
            fontSize="large"
            htmlColor={theme.palette.common.white}
          />
          <Switch size="large" color="primary" />
          <Typography variant="h6" color={theme.palette.common.white}>
            Water pump status
          </Typography>
        </Paper>
      </Grid>

      <Grid item md={6} xs={6}>
        <Paper
          className={classes.box}
          style={{ background: theme.palette.custom.orange }}
        >
          <AirOutlinedIcon
            fontSize="large"
            htmlColor={theme.palette.common.white}
          />
          <Switch size="large" color="primary" />
          <Typography variant="h6" color={theme.palette.common.white}>
            Fan control
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Controls;
