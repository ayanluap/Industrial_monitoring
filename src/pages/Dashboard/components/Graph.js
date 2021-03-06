import { useTheme } from '@emotion/react';
import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';

import DB from '../../../Utils/firebase';
import { ref, onValue } from 'firebase/database';

const useStyles = makeStyles((theme) => ({
  box: {
    minHeight: '200px',
    padding: '10px',
    boxShadow: theme.shadows[3],
    position: 'relative',
  },
}));

const Graph = ({ temp, humid }) => {
  const classes = useStyles();
  const theme = useTheme();

  const graph = {
    position: 'absolute',
    top: '65%',
    left: '50%',
    width: '100%',
    transform: 'translate(-50%,-50%)',
  };

  const roomTemperature = 23;

  const [temperature, setTemperature] = useState(10);
  const [humidity, setHumidity] = useState(20);

  useEffect(() => {
    const starCountRef = ref(DB, '/logs');
    onValue(starCountRef, (snapshot) => {
      const { temperature, humidity } = snapshot.val();
      setTemperature(temperature);
      setHumidity(humidity);
    });
  }, []);

  return (
    <Grid container spacing={1} mt={1} mb={2}>
      <Grid item md={6} xs={12}>
        <Paper className={classes.box}>
          <Typography variant="body1" align="center">
            Temperature of the room(in ℃)
          </Typography>
          <GaugeChart
            id="temp"
            style={graph}
            nrOfLevels={30}
            colors={[
              theme.palette.info.dark,
              theme.palette.success.dark,
              theme.palette.warning.dark,
            ]}
            animDelay={0}
            textColor={theme.palette.primary.dark}
            needleColor={'#ccc'}
            needleBaseColor={'#ccc'}
            formatTextValue={(val) => `${val}℃`}
            percent={temperature / 100}
          />
        </Paper>
      </Grid>
      <Grid item md={6} xs={12}>
        <Paper className={classes.box}>
          <Typography variant="body1" align="center">
            Humidity of the room(in %)
          </Typography>
          <GaugeChart
            id="humid"
            style={graph}
            nrOfLevels={30}
            colors={[
              theme.palette.info.dark,
              theme.palette.success.dark,
              theme.palette.warning.dark,
            ]}
            textColor={theme.palette.primary.dark}
            animDelay={0}
            needleColor={'#ccc'}
            needleBaseColor={'#ccc'}
            formatTextValue={(val) => `${val}%H`}
            percent={humidity / 100}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Graph;
