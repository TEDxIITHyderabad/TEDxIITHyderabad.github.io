import styles from "./GridSpeakers.module.css"

const Grid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.item}>Opportunity to meet the heroes you have followed for your life and interact with pioneers of the fields you are interested in.</div>
      <div className={styles.item}>A one-of-a-kind event canvassing technology, entertainment and design, giving you an opportunity to learn something new.</div>
      <div className={styles.item}>An atmosphere for thought provoking discussions and a critical way of looking and consequently tackling issues and questions at all levels.</div>
      <div className={styles.item}>Platform for real, jaw-dropping stories which continues to inspire people to reach their potential and help them break their limits and go beyond.</div>
    </div>
  );
};

export default Grid;
