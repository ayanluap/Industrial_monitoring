import { Alert, CircularProgress, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Controls from './components/Controls';
import Graph from './components/Graph';
import Greetings from './components/Greetings';
import Persons from './components/Persons';

import DB from '../../Utils/firebase';
import { ref, onValue } from 'firebase/database';

const useStyles = makeStyles((theme) => ({
  crcl1: {
    position: 'fixed',
    background: theme.palette.primary.main,
    // background: theme.palette.primary.main,
    height: '40px',
    width: '40px',
    borderRadius: '100%',
    transform: 'translateX(20px) scale(40)',
    filter: 'blur(10px)',
    zIndex: -10,
  },
  crcl2: {
    position: 'fixed',
    background: theme.palette.secondary.main,
    // background: theme.palette.grey,
    height: '40px',
    width: '40px',
    borderRadius: '100%',
    transform: 'scale(20)',
    right: 0,
    bottom: '20px',
    filter: 'blur(10px)',
    zIndex: -10,
  },
  overlay: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    left: 0,
    top: 0,
    background: theme.palette.custom.main,
    opacity: 0.6,
    zIndex: -5,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const starCountRef = ref(DB, '/logs');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className={classes.crcl1}></div>
      <div className={classes.crcl2}></div>
      <div className={classes.overlay}></div>
      <Container>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2}>
            <Grid item md={8} xs={12}>
              <Greetings />
              <Graph />
              {data && data.fire === 1 ? (
                <Alert variant="filled" severity="success">
                  Everything is seems to be ok - No harm
                </Alert>
              ) : (
                <Alert variant="filled" severity="error">
                  Detecting fire - Turning on water pump
                </Alert>
              )}
              <Controls />
            </Grid>
            <Grid item md={4} xs={12}>
              <Persons />
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
