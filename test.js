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

it('correctly calculates the difference of Years 1990 and 1980', () => {
  assert.equal(operations.diffYear(1990, 1980), 10);
});

