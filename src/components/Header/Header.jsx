import React from 'react';
import FontAwesome from 'react-fontawesome';
import Search from '../Search/Search.jsx';
import styles from './Header.css';
import logo from '../../img/logo.png';
import profilePic from '../../img/profile-pic.jpeg';

function Header() {
  return (
    <div className={styles.base}>
      <div className={`${styles.row} ${styles.heading}`}>
        <div className={styles.logo}>
          <img src={logo} alt="logo ux" />
        </div>
        <div className={styles.addPost}>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>
              <div className={styles.btnIcon}>
                <FontAwesome
                  name="plus"
                  size='2x'
                />
              </div>
              <div className={styles.btnText}>
                Add Post
              </div>
            </button>
          </div>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <img src={profilePic} className={styles.avatarImg} alt="NobtakaJP profile picture" />
            </div>
            <div className={styles.notifications}>
              5
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
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
    </div>
  );
}

export default Header;
