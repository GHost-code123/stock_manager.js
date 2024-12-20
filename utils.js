const prompt = require('prompt-sync')({sigint: true});
const colors = require('colors');

function get_input(pt) {
	do {
		s = prompt(pt);
	} while (s === '');

	return s;
}

function get_num(pt) {	
	let n;

	n = get_input(pt);

	n = parseFloat(n);
	if (isNaN(n)) {
		console.log("Invalid value! ".red + "Please enter a numeric value\n".yellow);
		return get_num(pt);
	}
	return n;
}

function ask_to_continue() {
	const end_time = Date.now() + 500;

	while (Date.now() < end_time)
		;
	prompt("\n            Press ENTER to continue".yellow);
}

module.exports = {get_input, get_num, ask_to_continue, colors};
