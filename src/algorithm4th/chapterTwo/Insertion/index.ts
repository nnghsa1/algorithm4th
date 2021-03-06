import { BaseSort } from "../base";

/**
 * ζε₯ζεΊ
 */
class Insertion extends BaseSort {

  public sort(a: any) {
    const len = a.length;
    for (let i = len - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (a[i] < a[j]) {
          this.exch(a, i, j);
        }
      }
    }
  }
}

export {
  Insertion,
};
