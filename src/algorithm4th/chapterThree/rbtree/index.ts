import type { Key } from '../../../utils';

type Color = 'RED' | 'BLACK';
const RED = 'RED';
const BLACK = 'BLACK';
class Node {
  public N: number;

  public key: Key;

  public value: any;

  public color: Color;

  public left: any;

  public right: any;

  public constructor(key: Key, value: any, N: number, color: Color) {
    this.key = key;
    this.value = value;
    this.color = color;
    this.N = N;
    this.left = null;
    this.right = null;
  }
}
export default class RBTree {
  public root: any;

  public constructor() {
    this.root = null;
  }

  public rotateLeft(h: Node) {
    const x = h.right;
    h.right = x.left;
    x.left = h;
    x.color = h.color;
    h.color = RED;
    x.N = h.N;
    h.N = this.size(h.left) + this.size(h.right);
    return x;
  }

  public rotateRight(h: Node) {
    const x = h.left;
    h.left = x.right;
    x.right = h;
    x.color = h.color;
    h.color = RED;
    x.N = h.N;
    h.N = this.size(h.right) + this.size(h.left);
    return x;
  }

  public isRed(x: Node): boolean {
    if (!x) {
      return false;
    }
    return x.color === RED;
  }

  public isBlack(x: Node): boolean {
    if (!x) {
      return false;
    }
    return x.color === BLACK;
  }

  public size(h: any) {
    return h.N;
  }

  public put(key: Key, value: any) {
    this.root = this._put(this.root, key, value);
    this.root.color = 'BLACK';
  }

  private _put(x: any, key: Key, value: any) {
    let h = x;
    if (!h) {
      return new Node(key, value, 1, RED);
    }

    const cmp = key.compareTo(h.key);
    if (cmp < 0) {
      h.left = this._put(h.left, key, value);
    } else if (cmp > 0) {
      h.right = this._put(h.right, key, value);
    } else {
      h.value = value;
    }

    if (this.isRed(h.right) && !this.isRed(h.left)) {
      h = this.rotateLeft(h);
    }
    if (this.isRed(h.left) && this.isRed(h.left.left)) {
      h = this.rotateRight(h);
    }
    if (this.isRed(h.left) && this.isRed(h.right)) {
      this.flipColors(h);
    }

    h.N = this.size(h.left) + this.size(h.right) + 1;
    return h;
  }

  private flipColors(h: any) {
    return h;
  }
}
