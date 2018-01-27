import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { underlineIntoSpace, dateDiffFromNow } from '../../utils';
import styles from './Link.css';
import authorPlaceholderImg from '../../img/author-placeholder-min.jpg';

function Link({ ...props }) {
  return (
    <div className={styles.base}>
      <div className={styles.upvotesWrapper}>
        <div className={styles.chevronUp}>
          <FontAwesome
            name="chevron-up"
          />
        </div>
        <div className={styles.upvotes}>
          {props.upvotes}
        </div>
      </div>
      <div className={styles.linkContent}>
        <div className={styles.site}>
          {props.url}
        </div>
        <h1 className={styles.title}>
          {props.title}
        </h1>
        <div className={styles.bottomContent}>
          <div className={styles.row1}>
            <div className={styles.category}>
              {props.category && underlineIntoSpace(props.category)}
            </div>
            <div className={styles.comments}>
              <FontAwesome
                name="comment"
              />
              <a className={styles.commentsLink} href="#">
                {props.comments} Comments
              </a>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.time}>
              {props.createdAt && `${dateDiffFromNow(props.createdAt * 1000)} months ago`}
            </div>
            <div className={styles.author}>
              <img src={authorPlaceholderImg} className={styles.authorImg} alt="author profile picture" />
              <div className={styles.authorName}>
                <a href="#">{props.author}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Link.defaultProps = {};

Link.propTypes = {
  upvotes: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  category: PropTypes.string,
  author: PropTypes.string,
  createdAt: PropTypes.number,
  comments: PropTypes.number,
};

export default Link;
