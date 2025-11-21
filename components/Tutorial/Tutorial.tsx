'use client';

import styles from './Tutorial.module.css';

export default function Tutorial() {
  const tutorials = [
    {
      title: "Download & Sign Up",
      description: "Download the Vtrust app from the App Store or Google Play. Create your account in under 2 minutes.",
      level: "Beginner"
    },
    {
      title: "Create Your First Contract",
      description: "Fill in the basic details: project description, total amount, and payment milestones.",
      level: "Beginner"
    },
    {
      title: "Fund the Contract",
      description: "Deposit funds into the smart contract. Money is held securely until milestones are completed.",
      level: "Beginner"
    }
  ];

  return (
    <section id="tutorial" className={styles.section}>
      <div className="wrap">
        <h2 className={styles.title}>Learn Vtrust in Minutes</h2>
        <p className={styles.subtitle}>
          Master the platform with our interactive step-by-step tutorials. Quick, easy, and designed to get you started fast.
        </p>

        <div className={styles.grid}>
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.title}
              className={styles.card}
            >
              <div className={styles.thumbnail}>
                <div className={styles.overlay}></div>
                <div className={styles.playButton}>
                  <div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.badge}>{tutorial.level}</div>
                <h4 className={styles.cardTitle}>{tutorial.title}</h4>
                <p className={styles.cardDescription}>{tutorial.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.watchLink}>Video Coming Soon →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <a
            href="https://vtrust-dashboard.vercel.app/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
