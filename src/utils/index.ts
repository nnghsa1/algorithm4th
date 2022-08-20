
class Key {
  public key: string;

  private _hasCode?: number;

  public constructor(key: string) {
    this.key = key;
    this._hasCode = undefined;
  }

  public compareTo(other: Key): number {
    let res = 0;
    if (this.key === other.key) {
      res = 0;
    } else if (this.key < other.key) {
      res = -1;
    } else {
      res = 1;
    }
    return res;
  }

  public hashCode() {
    if (this._hasCode) {
      return this._hasCode;
    }
    let hash = 0;
    let i = 0;
    while (i < this.key.length) {
      hash = hash * 31 + this.key.charCodeAt(i);
      i++;
    }
    return hash;
  }

  public equals(other: Key) {
    return this.key === other.key;
  }
}

class Value {
  public value: any;

  public constructor(value: any) {
    this.value = value;
  }
}

class Queue<T> {
  private array: T[];

  public constructor() {
    this.array = [];
  }

  public enqueue(value: T) {
    this.array.push(value);
  }

  public dequeue() {
    return this.array.shift();
  }

  public length(): number {
    return this.array.length;
  }

  public isEmpty(): boolean {
    return this.array.length === 0;
  }
}

class Stack<T> {
  public forEach: (callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any) => void;

  private array: T[];

  public constructor() {
    this.array = [];
    this.forEach = this.array.forEach;
  }

  public push(value: T) {
    this.array.push(value);
  }

  public pop() {
    this.array.pop();
  }

  public length(): number {
    return this.array.length;
  }

  public isEmpty(): boolean {
    return this.array.length === 0;
  }
}

class Bag<T> {
  private array: T[];

  public constructor() {
    this.array = [];
    this.forEach = this.array.forEach;
  }

  public add(value: T) {
    this.array.push(value);
  }

  public length(): number {
    return this.array.length;
  }

  public isEmpty(): boolean {
    return this.array.length === 0;
  }

  public forEach(cb: (value: T, index: number, array: T[]) => void) {
    this.array.forEach(cb);
  }
}

interface IComparable<T> {
  compareTo: (that: T) => number;
}

export { 
  Key, 
  Value, 
  Queue, 
  Stack,
  Bag,
};

export type {
  IComparable,
};
