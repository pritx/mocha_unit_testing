// Program for Calculating Year, Month, Day, Week, Hour, Minute and Days
/**
 * @author Pritesh Kumar [pritesh@edtyro.com]
 * @version 0.0.1
 */
const operations = require('./operations.js');
const readline = require('readline');

// Use readline to create command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
Calc.js
Welcome to the Node.js Date Difference Calculator app! 
Version: 1.0.0.
Usage: The user will be prompted for two string formatted Date(YYYY/MM/DD HH:MM:SS)
`);

rl.question('Enter the first datetime: ', (x) => {
  rl.question('Enter the second datetime: ', (y) => {

    console.log(operations.diffDate(x,y));

    rl.close();
  });
});