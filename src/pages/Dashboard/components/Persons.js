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
import React, { useState } from 'react';

const Persons = () => {
  const theme = useTheme();
  const [persons, setPersons] = useState(null);

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

      <Box mt={1}>{persons && <> Yes</>}</Box>

      {!persons && (
        <Alert variant="outlined" severity="info">
          Currently there are no people inside the room!
        </Alert>
      )}
    </Box>
  );
};

export default Persons;
