import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  entry: {},
  entryOverlay: {},
}));

const InitialTransition = ({ children }) => {
  const classes = useStyles();
  return (
    <motion.div
      onAnimationStart={() => document.body.classList.add('overflow-hidden')}
      onAnimationComplete={() =>
        document.body.classList.remove('overflow-hidden')
      }
      className={classes.entry}
    >
      <motion.div className=""></motion.div>
      <motion.div className=""></motion.div>
      <motion.div className=""></motion.div>
    </motion.div>
  );
};

export default InitialTransition;
