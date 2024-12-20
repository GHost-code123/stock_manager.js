const Product = require('./product');

class Inventory {

	constructor() {
		this.stock = [];
	}

	addProduct(name, desc, quantity, price) {
		const id = Date.now() % 100000;
		let newProd = new Product(id, name, desc, quantity, price);

		this.stock.push(newProd);
	}

	getProduct(idx) {
		return this.stock[idx];
	}

	getSize() {
		return this.stock.length;
	}
}

module.exports = Inventory, Product;
