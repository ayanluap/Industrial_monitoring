import { useTheme } from '@emotion/react';
import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  header: {
    height: '60px',
    borderBottom: `2px solid ${theme.palette.grey[300]}`,
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container>
      <header>
        <Grid
          className={classes.header}
          container
          spacing={0}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h3" color={theme.palette.primary.main}>
              Industrial monitoring and control system
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </header>
    </Container>
  );
};

export default Header;
