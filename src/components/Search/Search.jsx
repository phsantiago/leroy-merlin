import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import styles from './Search.css';

class Search extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={styles.base}>
        <label htmlFor="search" className={styles.icon}>
          <FontAwesome
            name="search"
            size='2x'
          />
        </label>
        <input { ...this.props } id="search" type="text" className={styles.input} />
      </div>
    );
  }
}

export default Search;
