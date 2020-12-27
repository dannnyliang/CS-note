class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedList {
  constructor(...parameters) {
    this.length = 0;
    this.head = null;

    for (const item of parameters) {
      this.insert(item);
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  get(index) {
    if (index > this.length) {
      throw "Exceed list length";
    }

    let item = this.head;
    for (let counter = 0; counter < index; counter++) {
      item = item.next;
    }
    return item;
  }

  indexOf(item) {
    let counter = 0;
    let tempNode = this.head;

    while (tempNode !== null && tempNode.item !== item) {
      tempNode = tempNode.next;
      counter++;
    }

    return counter >= this.length ? null : counter;
  }

  #insertHead(node) {
    node.next = this.head;
    this.head = node;
  }

  insert(item, index) {
    if (index < 0 || index > this.length) {
      throw "invalid insert index";
    }

    const node = new Node(item);
    let placeholder = this.head;

    // initialize or insert head
    if (!this.head || index === 0) {
      this.#insertHead(node);
    }

    // default insert
    else if (index === undefined || index === null) {
      while (placeholder.next) {
        placeholder = placeholder.next;
      }
      placeholder.next = node;
    }

    // insert in specific position
    else {
      // insert head has been implement, so start counting from index 1
      for (let counter = 1; counter < index; counter++) {
        placeholder = placeholder.next;
      }
      node.next = placeholder.next;
      placeholder.next = node;
    }

    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      throw "invalid remove index";
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      const prevNode = this.get(index - 1);
      prevNode.next = prevNode.next.next;
    }

    this.length--;
  }
}

module.exports = LinkedList;
