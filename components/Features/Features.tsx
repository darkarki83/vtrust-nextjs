'use client';

import styles from './Features.module.css';

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className="wrap">
        <h2 className={styles.title}>Why Vtrust makes deals safer and faster</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Secure payment contracts</h3>
            <p>Funds stay safe in a smart contract. Released only when conditions are met.</p>
          </div>
          <div className={styles.card}>
            <h3>Milestone-based releases</h3>
            <p>Split projects into stages. Payment released step by step as work gets approved.</p>
          </div>
          <div className={styles.card}>
            <h3>Built-in KYC verification</h3>
            <p>Verify identity to build trust and unlock higher limits.</p>
          </div>
          <div className={styles.card}>
            <h3>Fair dispute resolution</h3>
            <p>Neutral mediator reviews disputes. Smart contract follows their decision automatically.</p>
          </div>
          <div className={styles.card}>
            <h3>Easy for non-crypto users</h3>
            <p>Simple as any payment app. No need to understand blockchain.</p>
          </div>
          <div className={styles.card}>
            <h3>Built-in stablecoin access</h3>
            <p>Handle local and international payments without currency volatility.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
