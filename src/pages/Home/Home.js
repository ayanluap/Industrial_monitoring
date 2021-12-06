import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../assets/home/home5.jpg';
import InitialTransition from '../../layouts/InitialTransition';
import Banner from './components/Banner';

const useStyles = makeStyles((theme) => ({
  home: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    minHeight: '600px',
  },
  primeImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '400px',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        width: '300px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '250px',
      },
    },
  },
  primeImgFinal: {
    display: 'block',
    position: 'relative',
    top: -90,
    width: '90%',
    margin: '0 auto',
    zIndex: -100,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      maxWidth: '100%',
    },
  },
  imgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 0,
    opacity: 0.5,
    background: theme.palette.common.white,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <motion.div className={classes.home}>
      {/* <InitialTransition /> */}

      <Banner />
      <motion.div className={`${classes.primeImg} ${classes.primeImgFinal}`}>
        <motion.img
          src={home}
          alt="home"
          layoutId="main-layout-img1"
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }}
        />
        <motion.div
          className={classes.imgOverlay}
          transition={{
            delay: 1.6,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          }}
          animate={{ height: '100%' }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
