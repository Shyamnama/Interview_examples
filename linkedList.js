class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // INSERT FIRST NODE
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // INSERT LAST NODE
  insertLast(data) {
    let current = this.head;
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //INSERT AT INDEX
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    let node = new Node(data);
    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  //GET NODE AT INDEX
  getNodeAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //GET LAST NODE
  getLastNode() {
    let current = this.head;
    if (!this.head) {
      console.log(current.data);
      return;
    }

    while (current.next) {
      current = current.next;
    }
    console.log(current.data);
  }

  //REMOVE AT INDEX
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //REMOVE ALL
  removeAll() {
    this.head = null;
    this.size = 0;
  }

  //PRINT LIST
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(1995);
ll.insertLast(1998);
ll.insertLast(1999);
ll.insertAt(1996, 1);
ll.insertAt(1997, 2);
// ll.getNodeAt(1);
// console.log("----");
// ll.getLastNode();
// console.log("----");
// ll.removeAt(2);
// ll.removeAll();
ll.printList();
// console.log(ll);
