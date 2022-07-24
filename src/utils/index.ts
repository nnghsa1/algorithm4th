class Key {
  public key: string;

  public constructor(key: string) {
    this.key = key;
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
}

export { Key };
