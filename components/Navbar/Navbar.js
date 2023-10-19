import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import Button from '../../elements/Button/button';
import { links } from './data';
import styles from './navbar.module.css';

const LogoFont = Montserrat({ subsets: ['latin'], weight: ['400'] });

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        MOVIES HUB
      </Link>

      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <Button />
      </div>
    </div>
  );
}
