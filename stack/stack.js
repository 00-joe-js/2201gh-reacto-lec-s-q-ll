// ADT: Stack
// Underlying data structure: array
class Stack {
    constructor() {
        this._underlyingDataStructure = [];
    }
    push(value) {
        this._underlyingDataStructure.unshift(value);
    }
    pop() {
        const firstItem = this._underlyingDataStructure.shift();
        return firstItem;
    }
    size() {
        return this._underlyingDataStructure.length;
    }
}

const myStack = new Stack();

myStack.push("Donald");
myStack.push("Goofy");
myStack.push("Mickey");

console.log(myStack.size()); // 3
console.log(myStack.pop()); // "Mickey"