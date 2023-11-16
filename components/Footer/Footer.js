import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 MOVIEDB. All rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/images/icons/facebook.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="MOVIEDB Facebook link"
        />
        <Image
          src="/images/icons/instagram.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="MOVIEDB Instagram link"
        />
        <Image
          src="/images/icons/telegram.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="MOVIEDB Telegram link"
        />
        <Image
          src="/images/icons/twitter.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="MOVIEDB Twitter link"
        />
        <Image
          src="/images/icons/youtube.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="MOVIEDB Youtube link"
        />
      </div>
    </div>
  );
}
