import styles from '@/styles/Header.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Upskill Africa Logo" />
          Upskill Africa
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#community">Community</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className={styles.buttons}>
          <button className={styles.join}>Join Community</button>
          <button className={styles.start}>Start Learning</button>
        </div>
      </div>
    </header>
  );
      }
