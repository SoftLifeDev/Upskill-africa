import styles from '@/styles/WhyWeb3.module.scss';

export default function WhyWeb3() {
  return (
    <section className={styles.whyWeb3}>
      <div className={styles.content}>
        <h2>
          Why <span>Web3?</span>
        </h2>
        <p>
          Web3 is still in its early stages, and this is Africa's opportunity
          to be early adopters—not just followers. Unlike Web2, where Africa
          lagged behind, Web3 presents a level playing field where African
          talent can thrive, create, and earn.
        </p>
        <button>Explore Web3</button>
      </div>
      <img src="/man-laptop.png" alt="Man with laptop" />
    </section>
  );
}
