'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.content}`}>
        <div className={styles.copy}>
          © {currentYear} VTrust. Built for safer freelance deals.
        </div>
        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
