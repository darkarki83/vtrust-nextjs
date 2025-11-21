'use client';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.nav}`}>
        <a href="#" className={styles.logo} aria-label="VTrust logo">
          <img className={styles.logoImg} src="/logo/logo_transparent.png" alt="VTrust" />
        </a>
        <nav className={styles.menu}>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#tutorial">Tutorial</a>
          <a href="#faq">FAQ</a>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="#download">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
