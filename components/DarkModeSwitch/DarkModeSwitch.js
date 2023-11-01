import styles from './DarkModeSwitch.module.css';

export default function DarkModeSwitch() {
  const mode = 'dark';

  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌕</div>
      <div className={styles.icon}>🌚</div>
      <div
        className={styles.switcher}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
}
