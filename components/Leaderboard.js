
import React, { useState } from "react";
import styles from "./Leaderboard.module.css";
import Table from "./Table";

const Leaderboard = ({allData}) => {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Table data={allData} rowsPerPage={5} />
      </div>
    </main>
  )
}

export default Leaderboard