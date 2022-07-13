import { BaseSort } from '../base';

class QuickSort extends BaseSort {
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
    while (i < j) {
      while (a[flag] <= a[j] && flag < j) {
        j--;
      }
      this.exch(a, flag, j);
      flag = j;

      while (a[flag] > a[i] && flag > i) {
        i++;
      }
      this.exch(a, flag, i);
      flag = i;
    }

    return flag;
  }
}

/**
 * 三向切分快速排序，适用于含有大量重复元素的数组
 */
class QuickSort3way extends QuickSort {
  partition(a: any[], lo: number, hi: number) {
    let i = lo;
    let j = hi;
    let flag = lo;
    while (i < j) {
      while (a[flag] < a[j] && flag < j) {
        j--;
      }
      this.exch(a, flag, j);
      flag = j;

      while (a[flag] > a[i] && flag > i) {
        i++;
      }
      this.exch(a, flag, i);
      flag = i;
    }

    return flag;
  }

  _sort(a: any[], lo: number, hi: number) {
    if (hi <= lo) return;
    let lt = lo,
      i = lo + 1,
      gt = hi;
    while (i <= gt) {
      if (a[i] < a[lo]) {
        this.exch(a, lt++, i++);
      } else if (a[i] > a[lo]) {
        this.exch(a, i, gt++);
      } else {
        i++;
      }
    }
    this._sort(a, lo, lt - 1);
    this._sort(a, gt + 1, hi);
  }
}

export { QuickSort3way, QuickSort };
