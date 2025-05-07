// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  // return x.map(el => el * 2);
  // const res = [];

  // for (const num of x) {
  //   res.push(num * 2);
  // }

  // return res;

  return x.reduce((acc, el) => {
    acc.push(el * 2);
    return acc;
  }, []);
}
