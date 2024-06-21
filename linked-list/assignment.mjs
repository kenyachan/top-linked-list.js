import { LinkedList } from './linkedList.mjs';

const linkedList = new LinkedList();

linkedList.append("Item 1");
linkedList.append("Item 2");
linkedList.append("Item 3");
linkedList.append("Item 4");

console.log(linkedList.insertAt("haha...", 2).data);
console.log(linkedList.removeAt(3).data);
console.log(linkedList.toString());
