const prompt = require('prompt-sync')();

function get_input(pt) {
	do {
		s = prompt(pt);
	} while (s === '');

	return s;
}

function ask_to_continue() {
	const end_time = Date.now() + 1000;

	while (Date.now() < end_time)
		;
	prompt("\n            Press ENTER to continue".yellow);
}

module.exports = {get_input, ask_to_continue};
