const { get_input, ask_to_continue } = require('./utils.js');
const colors = require('colors');

const banner = "\n ----------- ◆ ".dim + "🧮" + " INVENTO ".magenta.bold + "🔢 " + "◆ -----------".dim; 

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

/// --------------------------------------------------------------- ///
function showMenu() {
	console.log('\nChoose an operation:\n'.yellow +
		'  1 - Add a product\n' +
		'  2 - Show a product informations\n' +
		'  3 - Update a product informations\n' +
		'  4 - Delete a product\n' +
		'  5 - List all products\n' +
		'  q - quit\n');
}

(() => {
	console.log(banner);
	
	while (true)
	{
		showMenu();

		let option = get_input("Enter your option: ".brightYellow);

		switch (option) {
			case '1':
				add();
				break;
			case '':
				break ;
			case 'q':
			case null:
				return ;
			
			default:
				console.error("Invalid option! ".red + "Please choose a valid option".yellow);
				break;
			
			}

	}

})();

console.log("Bye");
