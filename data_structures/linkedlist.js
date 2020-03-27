// Linked List in JavaScript
// 10 --> 5 --> 68


class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = {
      value: value,
      next: null
    }

    this.tail.next = node;
    this.tail = node;
    this.length = this.length + 1;

    return this;
  }

  preprend(value) {
    const node = {
      value: value,
      next: null
    }

    node.next = this.head;
    this.head = node;
    this.length++;

    return this;
  }

  printList() {
    let currentNode = this.head;
    let array = new Array();
  
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return 'Cannot add at given index'
    }

    if (index === 0) {
      this.preprend(value);
    }

    const node = {
      value: value,
      next: null
    };
    let currentNode = this.head;
    
    for (let i = 0; i <= index - 1; i++) {
      if (i === index - 1) {
        const nextNode = currentNode.next;
        currentNode.next = node;
        node.next = nextNode;
        this.length++;
      }
      currentNode = currentNode.next;
    }
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      return 'Cannot add at given index'
    }

    let currentNode = this.head;

    for (let i = 0; i <= index - 1; i++) {
      if (i === index - 1) {
        const nodeToRemove = currentNode.next;
        const newNextNode = nodeToRemove.next;

        currentNode.next = newNextNode;
        this.length--;
      }
      currentNode = currentNode.next;
    }
    return this;
  }
}

const mylist = new LinkedList(10);

mylist.append(5);
mylist.append(89);
mylist.preprend(395);
mylist.preprend(456);
mylist.insert(2, 42);
mylist.insert(6, 982);
mylist.insert(0, 895);
mylist.insert(4, 666);

//mylist.remove(5);

mylist.printList();
