import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';

import { motion } from 'framer-motion';

import home1 from '../assets/home/home6.jpg';
import home2 from '../assets/home/home2.jpg';
import home3 from '../assets/home/home3.jpg';
import home4 from '../assets/home/home7.png';
import home5 from '../assets/home/home5.jpg';

const useStyles = makeStyles((theme) => ({
  secImg: {
    position: 'absolute',
    transformOrigin: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '100%',
      objectFit: 'fill',
    },
    '&.home1': {
      width: '250px',
      left: '8%',
      bottom: '6%',
      objectFit: 'fill',
      zIndex: '1',
    },
    '&.home2': {
      width: '200px',
      left: '7%',
      top: '15%',
      objectFit: 'fill',
      zIndex: '1',
    },
    '&.home3': {
      width: '260px',
      right: '8%',
      top: '12%',
      objectFit: 'fill',
      zIndex: '1',
    },
    '&.home4': {
      width: '300px',
      right: '10%',
      bottom: '8%',
      objectFit: 'fill',
      zIndex: '1',
    },
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
      [theme.breakpoints.down('md')]: {
        width: '300px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '250px',
      },
    },
  },
}));

// VARIANTS
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -150,
    scale: 0.5,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  const classes = useStyles();

  return (
    <Container>
      <div className="loader">
        <motion.div
          className="loader__inner"
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          onAnimationComplete={() => {
            setLoading(false);
          }}
        >
          <motion.div variants={item} className={`${classes.secImg} home1`}>
            <motion.img src={home1} alt="home1" />
          </motion.div>
          <motion.div variants={itemMain} className={`${classes.primeImg}`}>
            <motion.img src={home5} alt="home5" layoutId="main-layout-img1" />
          </motion.div>
          <motion.div variants={item} className={`${classes.secImg} home2`}>
            <motion.img src={home2} alt="home2" />
          </motion.div>
          <motion.div variants={item} className={`${classes.secImg} home3`}>
            <motion.img src={home3} alt="home3" />
          </motion.div>
          <motion.div variants={item} className={`${classes.secImg} home4`}>
            <motion.img src={home4} alt="home4" />
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Loader;
