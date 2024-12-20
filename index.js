const { get_input, ask_to_continue, colors, get_num } = require('./utils.js');
const Inventory = require('./inventory');

const banner = "\n ----------- ◆ ".dim + "🧮" + " INVENTO ".magenta.bold + "🔢 " + "◆ -----------".dim; 

const inventory = new Inventory();

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

function get_quantity(pt, desc) {
	let quantity;

	while (true) {
		quantity = parseInt(get_num(pt));
		if (quantity >= 0)
			break ;
		console.log(`${desc} can't be lower than 0 !`.red);
	}
}

function add_product() {
	let name, desc, quantity, price;

	name = get_input("Enter product name: ");
	desc = get_input("Enter product description: ");
	quantity = get_quantity("Enter product quantity: ", "Quantity");
	price = get_quantity("Enter product price: ", "Price");

	inventory.addProduct(name, desc, quantity, price);
	console.log("\nProduct added successfully !".brightGreen);
}

function show_product_info() {
	let prod;
	const prod_num = parseInt(get_num("Enter a product number: "));

	if (prod_num >= inventory.getSize()) {
		console.log(`Product number ${prod_num} not found`.red);
		return ;
	}

	prod = inventory.getProduct(prod_num);
	console.log(`\nProduct ${prod_num} ------------\n` +
				`- ID:          ${prod.id}\n` +
				`- name:        ${prod.name}\n` +
				`- description: ${prod.desc}\n` +
				`- quantity:    ${prod.desc}\n` +
				`- price:       ${prod.desc}\n` +
				"----------------------");
}

function list_products() {

}

// ------------------------------------------------------------ //

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
				add_product();
				break;
			case '2':
				show_product_info();
				break ;
			case '3':
				break ;
			case '4':
				break ;
			case '5':
				list_products();
				break ;
			case 'q':
				return ;

			case '':
				break ;
			default:
				console.error("Invalid option! ".red + "Please choose a valid option".yellow);
				break;
			
		}

		ask_to_continue();
	}

})();

console.log("Bye");
