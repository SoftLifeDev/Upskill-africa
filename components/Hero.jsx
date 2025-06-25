import styles from '@/styles/Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textContent}>
        <h1>
          Unlock the Future with <span>Blockchain & Web3</span>
        </h1>
        <p>
          Upskill Africa is on a mission to equip young Africans with Blockchain
          and Web3 skills, ensuring they are not just users but innovators,
          builders, and shapers of the next digital economy.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primary}>Start Learning</button>
          <button className={styles.secondary}>Become a Partner</button>
        </div>
      </div>
      <div className={styles.images}>
        <img src="/lady.png" alt="Woman with laptop" />
        <img src="/guy.png" alt="Man with laptop" />
      </div>
    </section>
  );
      }
