import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from '../../styles/MaterialTable/MaterialTable.module.scss'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    /*backgroundColor: theme.palette.common.black,*/
    color: theme.palette.common.grey,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables(props) {

  const { rows } = props
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={styles.tableTitle} align="center">Trading Instrument</StyledTableCell>
            <StyledTableCell className={styles.tableTitle} align="center">Sell</StyledTableCell>
            <StyledTableCell className={styles.tableTitle} align="center">BUY</StyledTableCell>
            <StyledTableCell className={styles.tableTitle} align="center">Spread</StyledTableCell>
            <StyledTableCell className={styles.tableTitle} align="center">% Change</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.sell}</StyledTableCell>
              <StyledTableCell align="center">{row.buy}</StyledTableCell>
              <StyledTableCell align="center">{row.spread}</StyledTableCell>
              <StyledTableCell align="center">{row.change}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}