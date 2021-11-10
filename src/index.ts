import debug from 'debug'
import app from './app'
import * as readline from 'readline';
import * as process from 'process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const logger = { log: debug('index') }

logger.log(app.logString)


console.log('########################################');
console.log('####         Simple example         ####');
console.log('########################################');
console.log("\n");

rl.question('Press [ENTER] to exit.', () => {
  rl.close();
});
