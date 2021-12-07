import { useTheme } from '@emotion/react';
import {
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

import DB from '../../../Utils/firebase';
import { ref, onValue } from 'firebase/database';

const Persons = () => {
  const theme = useTheme();
  const [persons, setPersons] = useState(0);

  useEffect(() => {
    const starCountRef = ref(DB, '/logs');
    onValue(starCountRef, (snapshot) => {
      const { visitors } = snapshot.val();
      setPersons(visitors);
    });
  }, []);

  return (
    <Box mt={1}>
      <Table aria-label="custom pagination table">
        <TableBody>
          <TableRow
            sx={{ borderBottom: `2px solid ${theme.palette.grey[400]}` }}
          >
            <TableCell component="th" scope="row">
              <Typography variant="h6">Person's Name</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="h6" align="left">
                Contact Info
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Box mt={3}></Box>

      {persons <= 0 ? (
        <Alert variant="filled" severity="info">
          Currently there are no people inside the room!
        </Alert>
      ) : (
        <Alert variant="filled" severity="success">
          There are {persons} {persons > 1 ? 'peoples' : 'people'} inside the
          room!
        </Alert>
      )}
    </Box>
  );
};

export default Persons;
