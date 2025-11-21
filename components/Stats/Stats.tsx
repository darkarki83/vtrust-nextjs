'use client';

import styles from './Stats.module.css';

export default function Stats() {
  return (
    <section>
      <div className={`wrap ${styles.stats}`}>
        <div className={styles.card}>
          <b>0% custody</b>
          <span>Non‑custodial smart contracts</span>
        </div>
        <div className={styles.card}>
          <b>Milestones</b>
          <span>Auto‑release on approval</span>
        </div>
        <div className={styles.card}>
          <b>KYC verified</b>
          <span>Identity verification built‑in</span>
        </div>
        <div className={styles.card}>
          <b>Arbitration</b>
          <span>Fast dispute handling</span>
        </div>
      </div>
    </section>
  );
}
