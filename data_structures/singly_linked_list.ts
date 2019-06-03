class LinkedListNode<T> {
  public data: T | null;
  public next: LinkedListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

const head = Symbol("head");

export class LinkedList<T> {
  public [head]: LinkedListNode<T> | null;

  constructor() {
    this[head] = null;
  }

  add(data: T): T {
    // create a new node
    let newNode = new LinkedListNode<T>(data);

    let current = this[head];

    // special case: no items in the list yet
    if (current === null) {
      // just set head to the new node
      this[head] = newNode;
    } else {
      // follow `next` links until you reach the end
      while (current.next !== null) {
        current = current.next;
      }

      // assign the node into the `next` pointer
      current.next = newNode;
    }

    return data;
  }

  get(index: number): T | null {
    // ensure `index` is a positive value
    if (index < 0) {
      return null;
    }

    // the pointer use for transversal
    let current = this[head];

    // used to keep track of where in the list you are
    let i = 0;

    // traverse the list until you reach either the end or the index
    while (current !== null && i < index) {
      current = current.next;
      i++;
    }

    // ensure current is not null
    if (current === null) {
      return null;
    }

    return current.data;
  }

  remove(index: number): T | null {
    let current = this[head];

    if (current === null) {
      throw new RangeError(`index ${index} does not exist in the list`);
    }

    if (index < 0) {
      throw new RangeError(`index ${index} does not exist in the list`);
    }

    if (index === 0) {
      this[head] = current.next;
      return current.data;
    }

    // keep track of the node before current in the loop
    let previous: typeof current | null = null;

    // used to track how deep into the list you are
    let i = 0;

    // same loops as `get`
    while (current !== null && i < index) {
      // save the value of current
      previous = current;

      // traverse the next node
      current = current.next;

      // increment the count
      i++;
    }

    // ensure previous and current is not null
    if (previous !== null && current !== null) {
      // skip over the node to remove
      previous.next = current.next;

      // return the value just removed from the list
      return current.data;
    }

    throw new RangeError(`index ${index} does not exist in the list`);
  }

  *values() {
    let current = this[head];

    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }

  [Symbol.iterator]() {
    return this.values();
  }
}
