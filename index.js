/*
    Cliente node for talkins with system M
 */
import readline from 'readline'
import { Solos } from './controller'
import * as helpers from './helpers'

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let business = null

console.log(`
  -------------------------------------
  -------------------------------------
  -------------------------------------
      BEM VINDOS GALERA QUE MATA
  -------------------------------------
  -------------------------------------
  -------------------------------------
  `)


//pausando para que o server retorne com o model de context
// rl.pause()

//rl.setPrompt('You: ');
// rl.prompt();

rl.on('line', function (line) {
		const commands = line.trim().split(' ')

		switch(commands[0]) {
		case '!help':
			console.log(helpers.commands)
			break;
		case '!investment':
			business = new Solos(commands[1])
			console.log(business);
			break;
		default:
		rl.pause();
			// console.log(business.getInvestment());
			break;
		}
		rl.prompt();
	})
	.on('close', function () {
		console.log(' -- fllw! -- ');
		process.exit(0);
	});
