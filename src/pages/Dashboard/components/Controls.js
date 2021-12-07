import { useTheme } from '@emotion/react';
import { Grid, Paper, Switch, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

import DB from '../../../Utils/firebase';
import { ref, onValue, set } from 'firebase/database';

const useStyles = makeStyles((theme) => ({
  box: {
    minHeight: '135px',
    padding: '10px',
    boxShadow: theme.shadows[3],
  },
}));

const Controls = ({ initVisitors, initFire }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [visitors, setVisitors] = useState(initVisitors);
  const [fire, setFire] = useState(initFire);

  const [pumpSwitch, setPumpSwitch] = useState(false);
  const [fanSwitch, setFanSwitch] = useState(false);

  const [pump, setPump] = useState(0);
  const [fan, setFan] = useState(0);

  useEffect(() => {
    const starCountRef = ref(DB, '/logs');
    onValue(starCountRef, (snapshot) => {
      const { visitors, fire } = snapshot.val();
      setVisitors(visitors);
      setFire(fire);

      if (visitors >= 1) {
        setFanSwitch(true);
        setFan(1);
      }
      
      if(visitors<1){
      setFanSwitch(false);
        setFan(0);
      }

      if (fire === 0) {
        setPumpSwitch(true);
        setPump(1);
      }
      
      if(fire===1){
        setPumpSwitch(false);
        setPump(0);
      }
    });
  }, []);

  const fanHandler = (e) => {
    setFanSwitch(e.target.checked);
    fanSwitch ? setFan(1) : setFan(0);
    set(ref(DB, '/logs/fan'), fan);

    console.log({ visitors, fan });
    console.log({ fanSwitch });
  };

  const pumpHandler = (e) => {
    setPumpSwitch(e.target.checked);

    pumpSwitch ? setPump(1) : setPump(0);

    set(ref(DB, '/logs/pump'), pump);
    console.log({ fire, pump });
    console.log({ pumpSwitch });
  };

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
          <Switch
            size="large"
            color="primary"
            checked={pumpSwitch}
            onChange={(e) => pumpHandler(e)}
          />
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
          <Switch
            size="large"
            color="primary"
            checked={fanSwitch}
            onChange={(e) => fanHandler(e)}
          />
          <Typography variant="h6" color={theme.palette.common.white}>
            Fan control
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Controls;
