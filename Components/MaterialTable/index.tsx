import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { grey } from "@mui/material/colors";

import styles from "../../styles/MaterialTable/MaterialTable.module.scss";
import { IMaterialTable } from "../../interface";
import { filterTable, loadTableQuotes } from "../../redux/thunks/quotesThunk";
import { public_url } from "../../variables";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    /*backgroundColor: theme.palette.common.black,*/
    color: grey,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CustomizedTables(props: IMaterialTable) {
  // use dispatch
  const dispatch = useDispatch();

  // get all props
  const { categories, filters } = props;

  const [searched, setSearched] = useState("");

  const [category, setCategory] = useState(categories[0]);

  const [filter, setFilter] = useState(filters[0]);

  // function to get data
  const fetchData = (category: string) => {
    dispatch(loadTableQuotes(category));
  };
  const rows = useSelector((state: any) => state.quotes.table);

  // useEffect to fill data on category and filter change
  useEffect(() => {
    // run function if user is not searching
    if (!searched) {
      // setLoading(true);
      fetchData(category);
      // then run it every 3 seconds
      const interval = setInterval(function () {
        fetchData(category);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [category, filter, searched]);

  // search function
  const requestSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searched = e.target.value;
    setSearched(searched);
    dispatch(filterTable(searched));
  };

  // function to select category
  const targetCategory = (id: any) => {
    document!
      .querySelector<HTMLElement>(`#${category}`)!
      .classList!.remove(styles.table_title_active);

    document!
      .querySelector<HTMLElement>(`#${id}`)!
      .classList!.add(styles.table_title_active);

    setCategory(id);
  };

  // function to select filter
  const targetFilter = (id: any) => {
    document!
      .querySelector<HTMLElement>(`#${filter}`)!
      .classList!.remove(styles.table_filter_active);

    document!
      .querySelector<HTMLElement>(`#${id}`)!
      .classList!.add(styles.table_filter_active);

    setFilter(id);
  };

  return (
    <div className={styles.table_div}>
      <div
        className={` ${styles.table_search_div} ${styles.table_search_mobile}`}
      >
        <div className={styles.table_search_icon}>
          <Image alt="search" src={`${public_url}/uploads/search_c1268155f8.svg?updated_at=2021-12-16T11:31:28.223Z`} width={13} height={13} />
        </div>
        <input
          className={styles.table_search_input}
          type="text"
          placeholder="Search Instruments"
          value={searched}
          onChange={(e) => requestSearch(e)}
        />
      </div>

      <div className={styles.table_filters_div}>
        <div className="d-flex">
          <div className={styles.table_titles_div}>
            {categories.map((item, index) => {
              return (
                <a
                  key={item + index}
                  id={item}
                  className={`${styles.table_titles} ${
                    index === 0 && styles.table_title_active
                  }`}
                  onClick={(e) => targetCategory((e.target as HTMLElement).id)}
                >
                  {item}
                </a>
              );
            })}
          </div>

          <div
            className={` ${styles.table_search_div} ${styles.table_search_desktop}`}
          >
            <div className={styles.table_search_icon}>
              <Image alt="search" src={`/uploads/search_c1268155f8.svg?updated_at=2021-12-16T11:31:28.223Z`} width={13} height={13} />
            </div>
            <input
              className={styles.table_search_input}
              type="text"
              placeholder="Search Instruments"
              value={searched}
              onChange={(e) => requestSearch(e)}
            />
          </div>
        </div>

        <div className={styles.table_filters}>
          {filters.map((item, index) => {
            return (
              <a
                key={item + index}
                id={item}
                className={`${styles.table_filter} ${
                  index === 0 && styles.table_filter_active
                }`}
                onClick={(e) => targetFilter((e.target as HTMLElement).id)}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={styles.tableTitle} align="center">
                Trading Instrument
              </StyledTableCell>
              <StyledTableCell className={styles.tableTitle} align="center">
                Buy
              </StyledTableCell>
              <StyledTableCell className={styles.tableTitle} align="center">
                Sell
              </StyledTableCell>
              <StyledTableCell className={styles.tableTitle} align="center">
                Spread
              </StyledTableCell>
              <StyledTableCell className={styles.tableTitle} align="center">
                % Change
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody
            style={
              {
                position: !rows ? "relative" : "inherit",
                height: !rows ? "400px" : "auto",
              }
            }
          >
            {!rows ? (
              <div className={styles.loading}>
                <div
                  className={`spinner-grow ${styles.loading_color}`}
                  role="status"
                ></div>
              </div>
            ) : (
              rows.map((row: any, index: number) => (
                <StyledTableRow key={row.name + index}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.sell}</StyledTableCell>
                  <StyledTableCell align="center">{row.buy}</StyledTableCell>
                  <StyledTableCell align="center">{row.spread}</StyledTableCell>
                  <StyledTableCell align="center">{row.change}</StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default React.memo(CustomizedTables);
