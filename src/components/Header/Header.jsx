import React from 'react';
import FontAwesome from 'react-fontawesome';
import Search from '../Search/Search.jsx';
import styles from './Header.css';

function Header() {
  return (
    <div className={styles.base}>
      <div className={styles.menuWrapper}>
        <FontAwesome
          name="bars"
          size='2x'
        />
      </div>
      <div className={styles.searchWrapper}>
        <Search />
      </div>

    </div>
  );
}

export default Header;
