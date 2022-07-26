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
export { Key, Value };
