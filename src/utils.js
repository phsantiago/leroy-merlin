import moment from 'moment';

/**
 * compareKey
 * A curry function to compose with sort method of array.
 * Will sort descending based on object property
 *
 * @param {key} string
 * @returns {function}
 */
export const compareKey = key => (
  /**
   * lamda function to sort descending
   *
   * @param {a} Number
   * @param {b} Number
   * @returns {int}
   */
  (a, b) => {
    if (a[key] < b[key]) return 1;
    if (a[key] > b[key]) return -1;
    return 0;
  }
);


/**
 * underlineIntoSpace
 *
 * @param {category} string
 * @returns {cat} string
 */
export const underlineIntoSpace = cat => cat.replace('_', ' ');

/**
 * dateDiffFromNow
 * calc the distance between a date and now
 *
 * @param {date} timestamp
 * @returns {int}
 */
export const dateDiffFromNow = date => moment().diff(moment(date), 'months');
