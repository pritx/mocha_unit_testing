// Test Cases
/**
 * @author Pritesh Kumar [pritesh@edtyro.com]
 * @version 0.0.1
 */

const operations = require('./operations.js');
const assert = require('assert');

// it('correctly calculates the difference of Years 1990 and 1980', () => {
//   assert.equal(operations.diffDate("1990/12/12 14:20:13", "1990/12/12 14:20:13"), "0");
// });

it('converts YYYY/MM/DD Date to json object', () => {
  assert.equal(
    JSON.stringify(operations.parseDate("2019/12/12")),
    JSON.stringify(
      {
        y: "2019",
        m: "12",
        d: "12",
      }
    )
  );
});

it('correctly calculates the difference of the dates 2001/10/23 and 2010/05/24', () => {
  assert.equal(operations.mnthDays(3, 1996),(31));
});

it('correctly calculates the difference of the dates 2001/10/23 and 2010/05/24', () => {
  assert.equal(operations.diff_Date2(2001, 2010, 10, 05, 23, 24 ),('8 Years, 7 Months & 1 Days '));
});






