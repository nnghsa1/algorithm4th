class SingleNode {
  public key: any;

  public value: any;

  public constructor(key: any, value: any) {
    this.key = key;
    this.value = value;
  }
}

class Node {
  public array: SingleNode[];

  public left: Node | null;

  public middle: Node | null;

  public right: Node | null;

  public parent: Node | null;

  public append: Node | null;

  public constructor(key: any, value: any) {
    const singleNode = new SingleNode(key, value);
    this.array = [];
    this.array.push(singleNode);
    this.left = null;
    this.middle = null;
    this.right = null;
    this.parent = null;
    this.append = null;
  }

  public childCount(): number {
    const i = this.left ? 1 : 0;
    const j = this.right ? 1 : 0;
    const k = this.middle ? 1 : 0;
    return i + j + k;
  }

  public insert(node: Node) {
    const len = this.array.length;
    for (let i = 0; i < len; i++) {
      if (this.array[i].key >= node.array[0].key) {
        if (len === 1) {
          this.array.splice(i, 0);
          if (i === 0) {
            this.middle = this.left;
            this.left = node.left;
          } else {
            this.middle = this.right;
            this.right = node.right;
          }
        } else if (len === 2) {
          if (i === 0) {
            const rightNode = new Node(this.array[1].key, this.array[1].value);
            const newNode = new Node(this.array[0].key, this.array[0].value);
            newNode.left = node;
            newNode.right = rightNode;
            rightNode.left = this.middle;
            rightNode.right = this.right;
            rightNode.parent = newNode;
            node.right = this.left;
            node.parent = newNode;
            this.parent.append = newNode;
          } else if (i === 1) {
            const leftNode = new Node(this.array[0].key, this.array[0].value);
            const rightNode = new Node(this.array[1].key, this.array[1].value);
            leftNode.left = this.left;
            leftNode.right = node.left;
            leftNode.parent = node;
            rightNode.left = node.right;
            rightNode.right = this.right;
            rightNode.parent = node;
            node.left = leftNode;
            node.right = rightNode;
            this.parent.append = node;
          } else {
            const leftNode = new Node(this.array[0].key, this.array[0].value);
            const newNode = new Node(this.array[1].key, this.array[1].value);
            leftNode.left = this.left;
            leftNode.right = this.middle;
            leftNode.parent = newNode;
            node.left = this.right;
            node.parent = newNode;
            newNode.left = leftNode;
            newNode.right = node;
            this.parent.append = newNode;
          }
          // break;
        } else {
          console.log('array lenght mismatch');
          break;
        }
      }
    }
  }

  public isLeaf(): boolean {
    return this.childCount() === 0;
  }
}

class TwoThreeTree {
  public root: { next: null };

  public constructor() {
    this.root = {
      next: null,
    };
  }

  public put(key: any, value: any) {
    return this._put(this.root.next, key, value, null);
  }

  public get(key: any) {
    return this._get(this.root.next, key);
  }

  private _get(node: Node | null, key: any): any {
    if (!node) {
      return null;
    }

    const index = node.array.indexOf(key);
    if (index !== -1) {
      return node.array[index];
    }

    const len = node.array.length;
    let i = 0;
    for (; i < len; i++) {
      if (node.array[i] > key) {
        break;
      }
    }
    switch (i) {
      case 0:
        return this._get(node.left, key);
      case 1:
        return this._get(node.middle, key);
      case 2:
        return this._get(node.right, key);
      default:
        return null;
    }
  }

  private _put(node: Node | null, key: any, value: any, parent: Node | null): any {
    if (!node) {
      return;
    }
    // 1. 寻找插入位置
    if (!node.isLeaf()) {
      const len = node.array.length;
      let i = 0;
      for (; i < len; i++) {
        if (node.array[i].key === key) {
          // 已存在
          node.array[i].value = value;
          return node;
        }
        if (node.array[i].key > key) {
          break;
        }
      }
      switch (i) {
        case 0:
          this._put(node.left, key, value, node);
          break;
        case 1:
          this._put(node.middle, key, value, node);
          break;
        case 2:
          this._put(node.right, key, value, node);
          break;
        default:
          break;
      }
    } else {
      // 2. 插入节点，调整节点信息
      node.insert(node);
    }

    if (node.append) {
      const newNode = node.append;
      node.insert(newNode);
    }
  }
}

export { TwoThreeTree };
