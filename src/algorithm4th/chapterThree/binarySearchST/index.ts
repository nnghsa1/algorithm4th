class BinarySearchST {
  private keys: any[];
  
  private values: any[];

  public constructor(capacity = 0) {
    this.keys = new Array(capacity);
    this.values = new Array(capacity);
  }

  public size() {
    return 0;
  }

  public get(key: any) {
    if (this.isEmpty()) {
      return null;
    }
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      return this.values[index];
    }
    return null;
  }

  public put(key: any, value: any) {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      this.values[index] = value;
      return;
    }
    const i = this.rank(key);
    const len = this.values.length;
    for (let j = len; j > i; j--) {
      this.keys[j] = this.keys[j - 1];
      this.values[j] = this.values[j - 1];
    }
    this.keys[i] = key;
    this.values[i] = value;
  }

  public delete(key: any) {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      const i = this.keys.indexOf(key);
      let j = i;
      const len = this.values.length;
      while (j + 1 < len) {
        this.keys[j] = this.keys[j + 1];
        this.values[j] = this.values[j + 1];
        j++;
      }
      this.keys.pop();
      this.values.pop();
    }
  }

  public isEmpty() {
    return this.keys.length === 0;
  }

  /**
   *
   * @param key
   */
  public rank(key: any) {
    let lo = 0;
    let hi = this.keys.length - 1;

    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (key < this.keys[mid]) {
        hi = mid - 1;
      } else if (key > this.keys[mid]) {
        lo = mid + 1;
      } else {
        return mid;
      }
    }
    return lo;
  }
}

export { BinarySearchST };
