import React, { useState } from "react";

import useTable from "./useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    return (
        <>
        <table className={styles.table}>
          <thead className={styles.tableRowHeader}>
            <tr>
              <th className={styles.tableHeader}>Name</th>
              <th className={styles.tableHeader}>College Name</th>
              <th className={styles.tableHeader}>Points</th>
            </tr>
          </thead>
          <tbody>
            {slice.map((el) => (
              <tr className={styles.tableRowItems} key={el._id}>
                <td className={styles.tableCell}>{el.name}</td>
                <td className={styles.tableCell}>{el.college}</td>
                <td className={styles.tableCell}>{el.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      </>
    );
};

export default Table;