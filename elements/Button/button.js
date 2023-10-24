'use client';
import styles from './button.module.scss';

export default function Button() {
  return (
    <button
      /* className={styles.login} */
      onClick={() => {
        console.log('login');
      }}
    >
      Login
    </button>
  );
}
