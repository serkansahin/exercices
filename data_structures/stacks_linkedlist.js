class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (!this.first) {
      return null;
    }
    return this.first;
  }
  enqueue(value){
    const node = new Node(value);

    if (this.length === 0) {
      this.first = node;
    } else {
      this.last.next = node;
    }

    this.last = node;
    this.length++;
    return this;
  }

  dequeue(){
    if (this.first.next) {
      const second = this.first.next;
      this.first = second;
    } else if (this.first === this.last) {
      this.first = null;
      this.last = null;
    }

    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();

myQueue.enqueue('google.com');
myQueue.enqueue('twitter.com');
myQueue.enqueue('macdonalds.com');
myQueue.enqueue('github.com');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
