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
  
  // get all props
  const { allrows, categories, filters } = props

  // states
  const [rows, setRows] = useState(allrows)

  const [searched, setSearched] = useState('')

  const [category, setCategory] = useState(categories[0])

  const [filter, setFilter] = useState(filters[0])

  // search function
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
    document.querySelector(`#${category}`).classList.remove(styles.table_title_active)

    document.querySelector(`#${id}`).classList.add(styles.table_title_active)

    setCategory(id)
  }

  // function to select filter 
  const targetFilter = (id) => {
    document.querySelector(`#${filter}`).classList.remove(styles.table_filter_active)

    document.querySelector(`#${id}`).classList.add(styles.table_filter_active)

    setFilter(id)
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
            { categories.map((item, index) => {
              return (
                <a key={item} id={item} className={`${styles.table_titles} ${index === 0 && styles.table_title_active}`} onClick={(e) => targetCategory(e.target.id)}>{ item }</a>
              )
            })}
          </div>

          <div className={` ${styles.table_search_div} ${styles.table_search_desktop}`}>
            <div className={styles.table_search_icon}>
            <Image alt="search" src="/search.svg" width={13} height={13} />
            </div>
            <input className={styles.table_search_input} type='text' placeholder="Search Instruments" value={searched} onChange={(e) => requestSearch(e) } />
          </div>
          
      </div>
      
      <div className={styles.table_filters}>
        { filters.map((item, index) => {
          return (
          <a key={item} id={item} className={`${styles.table_filter} ${index === 0 && styles.table_filter_active}`} onClick={(e) => targetFilter(e.target.id)}>{ item }</a>
          )
        })}
        
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