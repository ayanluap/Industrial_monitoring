import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import LiquidButton from '../../../components/LiquidButton';

const useStyles = makeStyles((theme) => ({
  banner: {
    zIndex: 100,
    position: 'relative',
    marginTop: 40,
  },

  heading: {
    height: '180px',
    overflowY: 'hidden',
    display: 'flex',
  },

  letter: {
    fontSize: '150px',
    transform: 'translateY(-40px)',
    // transform: 'translateY(100px)',
    fontWeight: 500,
    letterSpacing: '-.5px',
  },

  letterOutlined: {
    color: theme.palette.common.white,
    margin: '0 45px',
    textShadow: `1px 1px 2px ${theme.palette.common.black}`,
  },

  rowTitle: {
    paddingRight: '25vw',
  },
}));

const bannerAnim = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnim = {
  initial: {
    opacity: 0,
    y: 400,
  },
  animate: {
    opacity: 1,
    y: -40,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const classes = useStyles();
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <Container>
      <motion.div vatiants={bannerAnim} className={classes.banner}>
        <Grid container alignItems="center" className={classes.bannerRow}>
          {/* ROW 01 */}
          <Grid item md={7} container alignItems="start" xs={12}>
            <motion.div
              variants={bannerAnim}
              initial="initial"
              animate="animate"
              className={classes.heading}
            >
              <motion.span variants={letterAnim} className={classes.letter}>
                I
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                n
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                d
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                u
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                s
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                t
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                r
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                i
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                a
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                l
              </motion.span>
            </motion.div>
          </Grid>
          <Grid item md={5} xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 0.4,
              }}
            >
              <Typography variant="subtitle1" color="#555" fontSize={14}>
                The project "Industry Monitoring and Control System" aims
                to supports small and medium-sized businesses, factories, and
                industrial settings by providing a cost-effective solution for
                harnessing the potential of automation and data.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        {/* ROW 02 */}
        <Grid
          container
          alignItems="center"
          className={`${classes.bannerRow} marquee ${playMarquee && 'animate'}`}
        >
          <Grid item md={12}>
            <motion.div
              initial={{ y: 310 }}
              animate={{ y: 0 }}
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
              className="marquee__inner"
            >
              <motion.div
                variants={bannerAnim}
                initial="initial"
                animate="animate"
                className={`${classes.heading} ${classes.rowTitle}`}
              >
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  m
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  o
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  n
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  i
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  t
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  o
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  r
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  i
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  n
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  g
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.letterOutlined}`}
                >
                  &
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  c
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  o
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  n
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  t
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  r
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  o
                </motion.span>
                <motion.span
                  variants={letterAnim}
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  l
                </motion.span>
              </motion.div>
              {/* ///////////////////////////////////////////////// */}
              <motion.div
                initial="initial"
                animate="animate"
                className={`${classes.heading} ${classes.rowTitle}`}
              >
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  m
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  o
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  n
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  i
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  t
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  o
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  r
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  i
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  n
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  g
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.letterOutlined}`}
                >
                  &
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  c
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  o
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  n
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  t
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  r
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  o
                </motion.span>
                <motion.span
                  className={`${classes.letter} ${classes.rowLetter}`}
                >
                  l
                </motion.span>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
        {/* ROW 03 */}
        <Grid container alignItems="center" className={classes.bannerRow}>
          <Grid item md={4} xs={12}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
                delay: 1,
              }}
            >
              <LiquidButton text={'Dashboard'} to="/dashboard" />
            </motion.div>
          </Grid>
          <Grid item md={8} xs={12}>
            <motion.div
              variants={bannerAnim}
              initial="initial"
              animate="animate"
              className={classes.heading}
            >
              <motion.span variants={letterAnim} className={classes.letter}>
                s
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                y
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                s
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                t
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                e
              </motion.span>
              <motion.span variants={letterAnim} className={classes.letter}>
                m
              </motion.span>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Banner;
