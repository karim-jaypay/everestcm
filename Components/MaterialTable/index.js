import React, { useState } from 'react';
import Image from 'next/image'
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
  
  const { allrows } = props

  const [rows, setRows] = useState(allrows)

  const [searched, setSearched] = useState('')

  const requestSearch = (e) => {
    const searched = e.target.value
    setSearched(e.target.value)
    const filteredRows = allrows.filter((row) => {
      return row.name.toLowerCase().includes(searched.toLowerCase());
    });
    setRows(filteredRows);
  };


  // function to select category 
  const targetCategory = (id) => {
    console.log(id)
  }


  return (

  <div className={styles.table_div}>
    <div className={` ${styles.table_search_div} ${styles.table_search_mobile}`}>
      <div className={styles.table_search_icon}>
      <Image alt="search" src="/search.svg" width={13} height={13} />
      </div>
      <input className={styles.table_search_input} type='text' placeholder="Search Instruments" value={searched} onChange={(e) => requestSearch(e) } />
    </div>

    <div className={styles.table_filters_div}>
      <div className="d-flex">
          <div className={styles.table_titles_div}>
            <a id="Forex" className={`${styles.table_titles} ${styles.table_title_active}`} onClick={(e) => targetCategory(e.target.id)}>Forex</a>
            <a id="Metals" className={styles.table_titles}>Metals</a>
            <a id="Shares"className={styles.table_titles}>Shares</a>
            <a id="Commodities" className={styles.table_titles}>Commodities</a>
            <a id="Cryptos" className={styles.table_titles}>Cryptos</a>
            <a id="Energies" className={styles.table_titles}>Energies</a>
            <a id="Indices" className={styles.table_titles}>Indices</a>
          </div>

          <div className={` ${styles.table_search_div} ${styles.table_search_desktop}`}>
            <div className={styles.table_search_icon}>
            <Image alt="search" src="/search.svg" width={13} height={13} />
            </div>
            <input className={styles.table_search_input} type='text' placeholder="Search Instruments" value={searched} onChange={(e) => requestSearch(e) } />
          </div>
          
      </div>
      
      <div className={styles.table_filters}>
          <a className={`${styles.table_filter} ${styles.table_filter_active}`}>Majors</a>
          <a className={styles.table_filter}>Minors</a>
          <a className={styles.table_filter}>Exotics</a>
          <a className={styles.table_filter}>All</a>
      </div>

      
    </div>
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
          {rows.map((row, index) => (
            <StyledTableRow key={row.name + index}>
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
  </div>
  );
}