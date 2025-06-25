import styles from '@/styles/AboutSection.module.scss';
‎
‎export default function AboutSection() { 
  return ( 
    <section className={styles.about}> 
      <div className={styles.imageWrapper}> 
        <img src="/about-image.jpg" alt="People working on laptops" className={styles.image} /> 
      </div> 
      <div className={styles.textContent}>
        <h2>About Us</h2> 
        <p> To build a skill-driven economy in Africa, where every young person has equal access to tech education, high-paying jobs, and financial freedom. </p> 
        <button className={styles.cta}>Join Our Community</button> 
      </div> 
    </section> 
  );
}
