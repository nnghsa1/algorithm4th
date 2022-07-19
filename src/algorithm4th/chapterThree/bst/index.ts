class Node {
  public key: any;

  public value: any;

  public count: number;

  public left: null | Node;

  public right: null | Node;

  public constructor(key: any, value: any, num: number) {
    this.key = key;
    this.value = value;
    this.count = num;
    this.left = null;
    this.right = null;
  }
}

class BST {
  private root: null | Node;

  public constructor() {
    this.root = null;
  }

  public size() {
    return this._size(this.root);
  }

  public get(key: any) {
    return this._get(this.root, key);
  }

  public put(key: any, value: any) {
    return this._put(this.root, key, value);
  }

  public max() {
    return this._max(this.root);
  }

  public min() {
    return this._min(this.root);
  }

  public floor(key: any) {
    return this._floor(this.root, key);
  }

  public ceil(key: any) {
    return this._ceil(this.root, key);
  }

  public select(k: number) {
    return this._select(this.root, k);
  }

  public rank(key: any) {
    return this._rank(this.root, key);
  }

  public delete(key: any) {
    this.root = this._delete(this.root, key);
  }

  public deleteMin() {}

  public deleteMax() {}

  public kes() {}

  private _size(root: any) {
    if (root) {
      return root.N;
    }
    return 0;
  }

  private _get(node: any, key: any): any {
    if (!node) {
      return null;
    }

    if (node.key === key) {
      return node.value;
    }
    if (node.key < key) {
      return this._get(node.right, key);
    }
    return this._get(node.left, key);
  }

  private _put(node: any, key: any, value: any) {
    if (!node) {
      return new Node(key, value, 1);
    }

    if (node.key < key) {
      node.right = this._put(node.right, key, value);
    } else if (node.key > key) {
      node.left = this._put(node.left, key, value);
    } else {
      node.value = value;
    }
    node.count = this._size(node.left) + this._size(node.right) + 1;
    return node;
  }

  private _max(node: any): any {
    let _node = node;
    while (_node.right) {
      _node = node.right;
    }
    return _node;
  }

  private _min(node: any): any {
    let _node = node;
    while (_node.left) {
      _node = node.left;
    }
    return _node;
  }

  private _floor(node: any, key: any): any {
    let _node = node;
    while (_node) {
      if (_node.key === key) {
        return _node;
      }
      // 左
      if (_node.left && key < _node.key && key > _node.left.key) {
        return _node.left;
      }
      // 右
      if (_node.right && key > _node.key && key < _node.right.key) {
        return _node.right;
      }

      if (key > _node.key) {
        _node = _node.right;
      } else {
        _node = _node.left;
      }
    }

    return null;
  }

  private _ceil(node: any, key: any) {
    let _node = node;
    while (_node) {
      if (_node.key === key) {
        return _node;
      }

      // 左
      if (_node.left && key < _node.ley && key > _node.left.key) {
        return _node;
      }
      // 右
      if (_node.right && key > _node.key && key < _node.right.key) {
        return _node;
      }

      if (key > _node.key) {
        _node = _node.right;
      } else {
        _node = _node.left;
      }
    }
    return null;
  }

  private _select(node: any, k: number): any {
    const count = this._size(node);
    if (count === k) {
      return node;
    } else if (count < k) {
      return this._select(node.right, k);
    }
    return this._select(node.left, k);
  }

  private _rank(node: any, key: any): number {
    if (!node) {
      return 0;
    }
    if (key === node.key) {
      return this._size(node);
    } else if (key < node.key) {
      return this._rank(node.left, key);
    }
    return 1 + this._size(node.left) + this._rank(node.right, key);
  }

  private _delete(node: any, key: any): any {
    if (!node) {
      return null;
    }

    if (node.key > key) {
      return this._delete(node.left, key);
    } else if (node.key < key) {
      return this._delete(node.right, key);
    }

    if (!node.left) {
      return node.right;
    } else if (!node.right) {
      return node.left;
    }
    // 右子节点的最小节点替换被删除节点
    const x = this._min(node);
    x.right = this._deleteMin(x.right);
    x.left = node.left;
    x.count = this._size(x.left) + this._size(x.right) + 1;
    return x;
  }

  private _deleteMin(node: any): any {
    if (!node) {
      return null;
    }
    if (!node.left) {
      return node.right;
    }
    node.left = this._deleteMin(node.left);
    node.count = this._size(node.left) + this._size(node.right) + 1;
  }

  private _deleteMax(node: any): any {
    if (!node) {
      return null;
    }

    if (!node.right) {
      return node.left;
    }

    node.right = this._deleteMax(node.right);
    node.count = this._size(node.left) + this._size(node.right) + 1;
  }
}

export { BST };
