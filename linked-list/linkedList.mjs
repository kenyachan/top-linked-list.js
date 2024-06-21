export class LinkedList {
	#head = null;

	constructor() {
	}

	append(data) {
		const node = new Node(data);

		if (this.#head === null)
			return this.#head = node;

		let currentNode = this.#head;

		while (currentNode.next !== null) {
			currentNode = currentNode.next;
		}

		return currentNode.next = node;
	}

	prepend(data) {
		const node = new Node(data);

		if (this.#head === null)
			return this.#head = node;

		node.next = this.#head;

		return this.#head = node;
	}

	at(index) {
		if (this.#head === null)
			return null;

		let currentNode = this.#head;

		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;

			if (currentNode === null)
				throw new Error('Index out of bounds');
		}

		return currentNode;
	}

	pop() {
		if (this.#head === null)
			return null;

		if (this.#head.next === null) {
			let currentNode = this.#head;
			this.#head = null;

			return currentNode;
		}

		let previousNode = this.#head;
		let currentNode = this.#head.next;	

		while (currentNode.next !== null) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}

		previousNode.next = null;

		return currentNode;
	}

	contains(data) {
		if (this.#head === null)
			return null;
		
		let currentNode = this.#head;

		for (currentNode; currentNode !== null; currentNode = currentNode.next)
			if (currentNode.data === data) return true;

		return false;
	}

	find(data) {
		if (this.#head === null)
			return null;

		let currentNode = this.#head;
		let index = 0;

		for (currentNode; currentNode !== null; currentNode = currentNode.next) {
			if (currentNode.data === data)
				return index;

			index++;
		}

		return null;
	}

	toString() {
		if (this.#head === null)
			return '';

		let currentNode = this.#head;
		let listAsString = '';

		for (currentNode; currentNode != null; currentNode = currentNode.next) {
			if (currentNode === this.#head)
				listAsString = `(${this.#head.data})`;
			else
				listAsString = `${listAsString} => (${currentNode.data})`;
		}

		return listAsString = `${listAsString} => null`;
	}

	insertAt(data, index) {
		if (this.#head === null)
			return null;

		if (index < 0)
			throw new Error('Index must be greater than or equal to zero');

		const node = new Node(data);
		let currentNode = this.#head;
		let previousNode = null;

		if (index === 0) {
			node.next = this.#head;
			return this.#head = node;
		}

		for (let i = 0; i <= index; i++) {
			if (i === index) {
				node.next = currentNode;
				return previousNode.next = node;
			}

			if (currentNode === null)
				return null;

			previousNode = currentNode;
			currentNode = currentNode.next;
		}
	}

	removeAt(index) {
		if (this.#head === null)
			return null;

		if (index < 0)
			throw new Error('Index must be greater than or equal ot zero');

		let currentNode = this.#head;
		let previousNode = null;

		if (index === 0)
			return this.#head = currentNode.next;

		for (let i = 0; i <= index; i++) {
			if (currentNode === null)
				return;

			if (i === index) {
				previousNode.next = currentNode.next;
				
				return currentNode;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
		}
	}
}

class Node {
	#data = null;
	#next = null;

	constructor(data) {
		this.#data = data;
	}

	get data() {
		return this.#data;
	}

	set data(data) {
		this.#data = data;
	}

	get next() {
		return this.#next;
	}

	set next(node) {
		this.#next = node;
	}
}
