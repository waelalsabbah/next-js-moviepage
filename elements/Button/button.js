'use client';
import styles from './button.module.scss';

export default function Button() {
  return (
    <button
      className={styles.logout}
      onClick={() => {
        console.log('login');
      }}
    >
      Login
    </button>
  );
}
