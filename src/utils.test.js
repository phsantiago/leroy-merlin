import { underlineIntoSpace, dateDiffFromNow, compareKey, maskCategory } from './utils';

describe('compareKey (sort descending)', () => {
  it('should return -1 when first key its lower', () => {
    const unsorted = {
      upvotes: 4
    }
    const unsortedTwo = {
      upvotes: 2
    }
    expect(compareKey("upvotes")(unsorted, unsortedTwo)).toBe(-1);
  });
  it('should return 0 when keys value are equal', () => {
    const unsorted = {
      upvotes: 22
    }
    const unsortedTwo = {
      upvotes: 22
    }
    expect(compareKey("upvotes")(unsorted, unsortedTwo)).toBe(0);
  });
  it('should return 1 when second value its higher', () => {
    const unsorted = {
      upvotes: 1
    }
    const unsortedTwo = {
      upvotes: 2
    }
    expect(compareKey("upvotes")(unsorted, unsortedTwo)).toBe(1);
  });
});

describe('underlineIntoSpace', () => {
  it('should transform _ into space', () => {
    expect(underlineIntoSpace("_")).toBe(' ');
  });
});

describe('dateDiffFromNow', () => {
  Date.now = jest.fn(() => 1487076708000);
  it('should calc months distance', () => {
    expect(dateDiffFromNow(1476075708000)).toBe(4);
  });
});
