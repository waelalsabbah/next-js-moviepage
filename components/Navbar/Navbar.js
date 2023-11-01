import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import LogoutButton from '../../app/(auth)/logout/LogoutButton';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import { links } from './data';
import styles from './navbar.module.css';

const LogoFont = Montserrat({ subsets: ['latin'], weight: ['400'] });

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        {/*  <img src="/public/images/logo.png" width={20} height={10} alt="" /> */}
        MOVIEDB
      </Link>

      <div className={styles.links}>
        <DarkModeSwitch />
        <LogoutButton />

        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
