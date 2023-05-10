let list = newLinkedList();

const listData = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

listData.forEach(item => list.append(item));

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

	function insertAt(value, index) {
		if (head === null) return;
		if (index < 0) throw new Error('Index must be greater than or equal to zero');

		let node = newNode(value);
		let currentNode = head;
		let previousNode = null;

		if (index === 0) {
			node.next = currentNode;
			head = node;

			return;
		}

		for (let i = 0; i <= index; i++) {
			if (i === index) {
				node.next = currentNode;
				previousNode.next = node;

				return;
			}

			if (currentNode === null) return;

			previousNode = currentNode;
			currentNode = currentNode.next;
		}
	}

	function removeAt(index) {
		if (head === null) return;
		if (index < 0) throw new Error('Index must be greater than or equal to zero');

		let currentNode = head;
		let previousNode = null;

		if (index === 0) {
			head = currentNode.next;
			return;
		}

		for (let i = 0; i <= index; i++) {
			if (currentNode === null) return;

			if (i === index) {
				previousNode.next = currentNode.next;
				return;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
		}
	}

	return {
		append,
		prepend,
		at,
		pop,
		contains,
		find,
		toString,
		insertAt,
		removeAt,

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
