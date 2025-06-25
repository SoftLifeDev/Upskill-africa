import styles from '@/styles/MissionSection.module.scss';
‎
‎export default function MissionSection() { 
  return (
    <section className={styles.mission}>
      <h2> Our <span>Mission</span> </h2>
      <div className={styles.cards}> 
        <div className={styles.card}> 
          <div className={styles.icon}>🔗</div>
          <p>Teach in-demand Web3 & Blockchain skills</p>
        </div> 
        <div className={styles.card}> 
          <div className={styles.icon}>🧪</div>
          <p>Provide hands-on training through boot camps, workshops, and meetups</p> 
        </div> 
        <div className={styles.card}> 
          <div className={styles.icon}>💼</div> 
          <p>Connect learners with job opportunities in the global tech space</p>
        </div> 
      </div> 
    </section>
  );
}
