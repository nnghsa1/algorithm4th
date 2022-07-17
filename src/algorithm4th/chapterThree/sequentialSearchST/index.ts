
class Node {
  public key: any;
  public value: any;
  public next: any;
  public constructor(key = '', value: any, next: any) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class SequentailSearchST {
  public first: any;
  public constructor() {
    console.log("Starting");
    this.first = null;


  }

  public get(key: any) {
    for (let x = this.first; x; x = x.next) {
      //
      if (x.key === key) {
        return x;
      }
    }
    return null;
  }

  public put(key: any, value: any) {
    for (let x = this.first; x; x = x.next) {
      if (x.key === key) {
        x.value = value;
        return;
      }
    }
    this.first = new Node(key, value, this.first);
  }

  public show() {
    console.log(this.first);
  }
}

export {
  SequentailSearchST,
};
