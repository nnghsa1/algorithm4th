import { BaseSort } from '../base';

export default class QuickSort extends BaseSort {
  sort(a: any[]) {
    const lo = 0;
    const hi = a.length - 1;
    this._sort(a, lo, hi);
  }

  _sort(a: any[], lo: number, hi: number) {
    if (lo >= hi) {
      return;
    }
    const j = this.partition(a, lo, hi);
    this._sort(a, lo, j - 1);
    this._sort(a, j + 1, hi);
  }

  partition(a: any[], lo: number, hi: number) {
    let i = lo;
    let j = hi;
    let flag = lo;
    while(i < j) {
      while(a[flag] <= a[j] && flag < j) {
        j--;
      }
      this.exch(a, flag, j);
      flag = j;

      while(a[flag] > a[i] && flag > i) {
        i++;
      }
      this.exch(a, flag, i);
      flag = i;
    }

    return flag;
  }
}
