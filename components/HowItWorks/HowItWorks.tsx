'use client';

import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <div className="wrap">
        <h2 className={styles.title}>How it works</h2>
        <div className={styles.imageContainer}>
          <img src="/Vtrust-6.jpg" alt="How Vtrust Works - Step by step process" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
