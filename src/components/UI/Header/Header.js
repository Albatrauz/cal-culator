import React from 'react';
import styles from './Header.module.scss';

const Header = ({ user }) => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>My Cal-Culator</div>
        <nav>
          <ul className={styles.navWrapper}>
            <li className={styles.navWrapperItem}>eader</li>
            <li className={styles.navWrapperItem}>eader</li>
            <li className={styles.navWrapperItem}>eader</li>
            { user ? <li className={styles.navWrapperItem}>My Profile</li> : null}
          </ul>
          {user ? <span>Welcome back, <strong>{user.displayName}</strong></span> : null}
        </nav>
      </div>
    </header>
  )
};

export default Header;
