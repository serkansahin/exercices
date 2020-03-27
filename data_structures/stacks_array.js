class Stack {
  constructor(){
    this.data = new Array();
  }
  
  peek() {
    return this.data[this.data.length -1];
  }
  
  push(value){
    this.data.push(value);
    return value;
  }

  pop(){
    this.data.pop();
    return this.peek();
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push(256);
myStack.push(489);
myStack.push(9896);
myStack.peek();

myStack.pop();
myStack.peek();

console.log(myStack.length);
console.log(myStack.bottom);
console.log(myStack.top);
myStack.push(77);
myStack.push(989);
myStack.push(0);
myStack.pop();
myStack.pop();


//Discord
//Udemy
//google
