import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './Footer.css';
import logo from '../../img/logo.png';

function Footer() {
  return (
    <div className={styles.base}>
      <div className={styles.about}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.aboutText}>
          <h6 className={styles.title}>The UX Library</h6>
          <div className={styles.sub}>Community curated design content & discussion</div>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.socialNetwork}>
          <FontAwesome
            className={`${styles.fbIcon} ${styles.socialIcon}`}
            name="facebook"
          />
          Facebook
        </div>
        <div className={styles.socialNetwork}>
          <FontAwesome
            className={`${styles.twIcon} ${styles.socialIcon}`}
            name="twitter"
          />
          Twitter
        </div>
        <div className={styles.linksWrapper}>
          <div className={styles.links}>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Sign in</a>
          </div>
          <div className={styles.copyright}>
            © 2014 - The UX Library
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.defaultProps = {};

export default Footer;
