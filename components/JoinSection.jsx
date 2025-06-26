import styles from '@/styles/JoinSection.module.scss';
‎
‎export default function JoinSection() {
  return ( 
    <section className={styles.join}> 
      <div className={styles.textContent}> 
        <h2> Join the <span>UpSkill Africa</span> Movement </h2>
        <p> Whether you’re a student, tech enthusiast, or professional, UpSkill Africa provides the knowledge, network, and opportunities to thrive in Web3. </p> 
        <div className={styles.buttons}>
          <button className={styles.primary}>Join Our Community</button>
          <button className={styles.secondary}>Become a Partner</button>
        </div>
      </div> 
      <div className={styles.imageWrapper}> 
        <img src="/join-image.jpg" alt="Smiling person with laptop" />
      </div> 
    </section> 
  );
}
‎
