import { BaseSort } from '../base';

export default class Shell extends BaseSort {
  sort(a: any[]) {
    const len = a.length;
    let h = 1;
    while (h < len / 3) {
      h = 3 * h + 1;
    }

    while (h >= 1) {
      for (let i = h; i < len; i++) {
        for (let j = i; j >= h; j -= h) {
          if (a[j - h] > a[j]) {
            this.exch(a, j - h, j);
          }
        }
      }
      h = Math.floor(h / 3);
    }
  }
}
