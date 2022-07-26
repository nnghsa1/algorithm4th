import type { Key, Value } from '../../../utils';
interface KeysArray {
  [index: number]: Key | null;
}

interface ValueArray {
  [index: number]: Value | null;
}

class LinearProbingHashST {
  public N: number;

  public M: number;

  public keys: KeysArray;

  public values: ValueArray;

  public constructor() {
    // 符号表键值对的总数
    this.N = 0;
    // 线性探测表的大小
    this.M = 16;
    // 键
    this.keys = new Array(this.M);
    // 值
    this.values = new Array(this.M);
  }

  public put(key: Key, value: Value): void {
    if (this.N >= this.M / 2) {
      this.resize(2 * this.M);
    }
    let i = 0;
    for (i = this.hash(key); this.keys[i]; i = (i + 1) % this.M) {
      if (this.keys[i] === key) {
        this.values[i] = value;
        break;
      }
    }
    this.keys[i] = key;
    this.values[i] = value;
    this.N++;
  }

  public get(key: Key): any {
    for (let i = this.hash(key); this.keys[i]; i = (i + 1) % this.M) {
      if (this.keys[i] === key) {
        return this.values[i];
      }
    }
    return null;
  }

  public delete(key: Key): void {
    if (!this.contains(key)) {
      return;
    }

    let i = this.hash(key);
    while (this.keys[i] && !this.keys[i]?.equals(key)) {
      i++;
    }
    this.keys[i] = null;
    this.values[i] = null;

    i = (i + 1) % this.M;
    while (this.keys[i]) {
      const keyRedo = this.keys[i] as Key;
      const valueRedo = this.values[i] as Value;
      this.keys[i] = null;
      this.values[i] = null;
      this.N--;
      this.put(keyRedo, valueRedo);
      i = (i + 1) % this.M;
    }
    this.N--;
    if (this.N > 0 && this.N === this.M / 8) {
      this.resize(this.M / 2);
    }
  }

  private contains(key: Key): boolean {
    let i = this.hash(key);
    while (this.keys[i]) {
      if (this.keys[i]?.equals(key)) {
        return true;
      }
      i = (i + 1) % this.M;
    }
    return false;
  }

  private hash(key: Key): number {
    return (key.hashCode() & 0x7fffffff) % this.M;
  }

  private resize(size: number): void {
    const oldKeys = this.keys;
    const oldValues = this.values;
    this.keys = new Array(size);
    this.values = new Array(size);
    this.N = 0;
    for (let i = 0; i < this.M; i++) {
      if (oldKeys[i]) {
        this.put(oldKeys[i] as Key, oldValues[i] as Value);
      }
    }
  }
}
export { LinearProbingHashST };
