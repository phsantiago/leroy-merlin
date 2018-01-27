import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Link from '../Link/Link.jsx';
import styles from './LinkList.css';

class LinkList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    haystack: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    return (
      <div className={styles.base}>
        <div className={styles.listWrapper}>
          { this.props.loading &&
            <Fragment>
              <FontAwesome
                name="spinner"
                spin
              />
              <h4>loading</h4>
            </Fragment>
          }
          { this.props.loading ||
            this.props.haystack.map((item, i) => (
              <Link
                key={i}
                upvotes={item.upvotes}
                title={item.meta && item.meta.title}
                url={item.meta && item.meta.url}
                category={item.category}
                author={item.meta && item.meta.author}
                createdAt={item.created_at}
                comments={item.comments}
              />
            ))
          }
          { this.props.loaded && this.props.haystack.length === 0 ?
            <h1>No results found</h1>
            : null
          }
        </div>
      </div>
    );
  }
}

export default LinkList;
