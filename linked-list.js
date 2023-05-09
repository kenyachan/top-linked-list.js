let list = newLinkedList();

const listData = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

listData.forEach(item => list.append(item));

console.log(list.toString());
console.log(list.size);

function newLinkedList() {
	let head;

	function append(data) {
		let node = newNode(data);

		if (head === undefined) {
			head = node;
			return;
		}

		let currentNode = head;

		while (currentNode.next !== null) {
			currentNode = currentNode.next;
		}

		currentNode.next = node;
	}

	function prepend(data) {
		let node = newNode(data);

		if (head === undefined) {
			head = node;
			return;
		}

		node.next = head;
		head = node;
	}

	function at(index) {
		if (head === undefined) return null;

		let currentNode = head;

		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;

			if (currentNode === null)
				throw new Error('Index out of bounds');
		}

		return currentNode;
	}

	function pop() {
		if (head === undefined) return null;
			
		let tailNode = head;

		while (tailNode.next.next !== null) {
			tailNode = tailNode.next;
		}

		tailNode.next = null;
	}

	function contains(data) {
		if (head === undefined) return false;

		let currentNode = head;

		for (currentNode; currentNode !== null; currentNode = currentNode.next) {
			if (currentNode.data === data) return true;
		}

		return false;
	}

	function find(data) {
		if (head === undefined) return null;

		let currentNode = head;
		let index = 0;

		for (currentNode; currentNode !== null; currentNode = currentNode.next) {
			if (currentNode.data === data) return index;

			index++;
		}

		return null;
	}

	function toString() {
		if (head === undefined) return '';

		let currentNode = head;
		let str = '';

		for (currentNode; currentNode !== null; currentNode = currentNode.next) {
			if (currentNode === head) {
				str = `(${head.data})`;
			} else {
				str = `${str} -> (${currentNode.data})`;
			}
		}

		str = `${str} -> null`;

		return str;
	}

	return {
		append,
		prepend,
		at,
		pop,
		contains,
		find,
		toString,

		get size() {
			if (head === undefined) return 0;

			let size = 0;
			let currentNode = head;

			for (size; currentNode !== null; size++) {
				currentNode = currentNode.next;
			}

			return size;
		},

		get head() {
			return head || null;
		},

		get tail() {
			if (head === undefined) return null;
			
			let tailNode = head;

			while (tailNode.next !== null) {
				tailNode = tailNode.next;
			}
			
			return tailNode;
		},
	}
}

function newNode(data = null) {
	let next = null;

	return {
		get data() {
			return data;
		},

		set data(value) {
			data = value;
		},

		get next() {
			return next;
		},

		set next(node) {
			next = node;
		}
	}
}
