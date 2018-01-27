import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Search from '../Search/Search.jsx';
import styles from './SearchWithOptions.css';

export default class SearchWithOptions extends Component {
  static propTypes = {
    onSearch: PropTypes.func,
    onChangeSort: PropTypes.func,
    sortOrder: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openOptions() {
    this.setState({ options: !this.state.options });
  }

  render() {
    return (
      <div className={styles.row}>
        <div className={styles.menuWrapper} onClick={() => this.openOptions()}>
          <FontAwesome
            name="bars"
            size='2x'
          />
          { this.state.options &&
            <Fragment>
              <div className={styles.filtersForm} onClick={event => event.stopPropagation()}>
                <h5 className={styles.sortTitle}>Sort by:</h5>
                <form>
                  <label>
                    <input
                      name="test"
                      value="upvotes"
                      type="radio"
                      checked={this.props.sortOrder === 'upvotes'}
                      onChange={() => this.props.onChangeSort('upvotes')}
                    />
                    Votes
                  </label>
                  <br />
                  <label>
                    <input
                      name="test"
                      value="created_at"
                      type="radio"
                      checked={this.props.sortOrder === 'created_at'}
                      onChange={() => this.props.onChangeSort('created_at')}
                    />
                    Creation date
                  </label>
                  <br />
                  <label>
                    <input
                      name="test"
                      value="comments"
                      type="radio"
                      checked={this.props.sortOrder === 'comments'}
                      onChange={() => this.props.onChangeSort('comments')}
                    />
                    Comments
                  </label>
                </form>
              </div>
              <div className={styles.formClickOutside}></div>
            </Fragment>
          }
        </div>
        <div className={styles.searchWrapper}>
          <Search onChange={event => this.props.onSearch(event)}/>
        </div>
      </div>
    );
  }
}
