'use client';

import styles from './FAQ.module.css';

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className="wrap">
        <h2 className={styles.title}>FAQ</h2>
        <div className={styles.faq}>
          <details>
            <summary>What is a smart-payment contract?</summary>
            <p>It's a secure digital agreement that holds funds until specific conditions (like milestone approvals) are met. The contract runs automatically, so neither party can break the terms or take money unfairly.</p>
          </details>
          <details>
            <summary>Is VTrust custodial?</summary>
            <p>No. Funds are held in smart contracts on the blockchain. Vtrust cannot move, freeze, or access your funds—only the pre‑agreed contract terms control what happens.</p>
          </details>
          <details>
            <summary>Do I need to own crypto to use Vtrust?</summary>
            <p>Not necessarily. Vtrust supports multiple payment methods, including stablecoins and fiat‑on‑ramps, depending on your region and project settings.</p>
          </details>
          <details>
            <summary>How does KYC work?</summary>
            <p>Identity verification is handled through certified third‑party providers. Your documents are encrypted, and only your verification status is stored on Vtrust. This protects your privacy while reducing fraud.</p>
          </details>
          <details>
            <summary>What happens if I have a dispute?</summary>
            <p>Either party can open a dispute in‑app. A neutral mediator reviews the case and decides how locked funds should be split or refunded. The smart contract then follows this decision automatically.</p>
          </details>
          <details>
            <summary>What blockchains does Vtrust support?</summary>
            <p>You can start with your preferred mainnet, and Layer‑2 options are planned. Contact our team for specific chain availability in your region.</p>
          </details>
          <details>
            <summary>Can I integrate Vtrust into my own platform?</summary>
            <p>Yes. Vtrust offers an open API for marketplaces, agencies, and freelance platforms that want to add secure payment contracts to their ecosystem.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
