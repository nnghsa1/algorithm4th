import { BaseSort } from '../base';

/**
 * 原地归并
 */
class MergeInSpace extends BaseSort {
  aux: any[];
  constructor() {
    super();
    this.aux = [];
  }

  filp(a: any[], lo: number, hi: number) {
    let i = lo;
    let j = hi;
    while (i <= j) {
      this.exch(a, i, j);
      i++;
      j--;
    }
  }

  merge(a: any[], lo: number, middle: number, hi: number) {
    let i = lo;
    let j = middle + 1;

    for (let k = i; k <= hi; k++) {
      this.aux[k] = a[k];
    }

    // 使用手摇算法实现原地merge
    for (let k = i; k <= hi; k++) {
      if (i >= j || j > hi) {
        break;
      }

      if (a[i] <= a[j]) {
        i++;
      } else if (a[i] > a[j]) {
        // 使用手摇算法
        let afterStart = j;

        let afterEnd = j;
        while (j <= hi && a[j] <= a[i]) {
          afterEnd = j;
          j++;
        }

        // 1. 翻转前一段
        this.filp(a, i, afterStart - 1);
        // 2. 翻转后一段
        this.filp(a, afterStart, afterEnd);
        // 3. 整体翻转
        this.filp(a, i, afterEnd);

        i += afterEnd - afterStart + 1;
      }
    }
  }

  sort(a: any[]) {
    const len = a.length;
    /**
     * lo   表示每一个子串的起始下标
     * half 表示每一个子串的一半长度
     * hi   表示每一个子串的末下标
     */
    for (let half = 1; half < len; half += half) {
      for (let lo = 0; lo < len - half; lo += 2 * half) {
        const middle = lo + half - 1;
        // 末尾的下标为 起始下标 + 子串长度，若末尾下标大于数组长度，去数组末尾下标
        const hi = Math.min(lo + half + half - 1, len - 1);
        this.merge(a, lo, middle, hi);
      }
    }
  }
}

/**
 * 自顶向下归并
 */
class MergeToDown extends BaseSort {
  aux: any[];
  constructor() {
    super();
    this.aux = [];
  }
  merge(a: any[], lo: number, middle: number, hi: number) {
    let i = lo;
    let j = middle + 1;

    for (let k = i; k <= hi; k++) {
      this.aux[k] = a[k];
    }

    for (let k = i; k <= hi; k++) {
      if (i > middle) {
        a[k] = this.aux[j++];
      } else if (j > hi) {
        a[k] = this.aux[i++];
      } else if (this.aux[j] < this.aux[i]) {
        a[k] = this.aux[j++];
      } else {
        a[k] = this.aux[i++];
      }
    }
  }

  sort(a: any[]) {
    const len = a.length;
    for (let i = 1; i < len; i += i) {
      for (let j = 0; j < len - i; j += 2 * i) {
        this.merge(a, j, j + i - 1, Math.min(j + i + i - 1, len - 1));
      }
    }
  }
}

/**
 * 自底向上
 */
class MergeToUp extends BaseSort {
  aux: any[];
  constructor() {
    super();
    this.aux = [];
  }

  merge(a: any[], lo: number, middle: number, hi: number) {
    let i = lo;
    let j = middle + 1;

    for (let k = i; k <= hi; k++) {
      this.aux[k] = a[k];
    }

    for (let k = i; k <= hi; k++) {
      if (i > middle) {
        a[k] = this.aux[j++];
      } else if (j > hi) {
        a[k] = this.aux[i++];
      } else if (this.aux[j] < this.aux[i]) {
        a[k] = this.aux[j++];
      } else {
        a[k] = this.aux[i++];
      }
    }
  }

  sort(a: any[]) {
    this.aux = new Array(a.length);
    this._sort(a, 0, a.length - 1);
  }

  _sort(a: any[], i: number, j: number) {
    if (j <= i) return;
    const middle = Math.floor((i + j) / 2);
    this._sort(a, 0, middle);
    this._sort(a, middle + 1, j);
    this.merge(a, i, middle, j);
  }
}

/**
 * 归并排序
 */
export default class Merge extends BaseSort {
  mergeToUp: MergeToUp | undefined;
  mergeToDown: MergeToDown | undefined;
  mergeInSpace: MergeInSpace | undefined;
  constructor() {
    super();
    // this.mergeToUp = new MergeToUp();
    // this.mergeToDown = new MergeToDown();
    this.mergeInSpace = new MergeInSpace();
  }
  sort(a: any[]) {
    if (this.mergeToUp) {
      this.mergeToUp.sort(a);
    } else if (this.mergeToDown) {
      this.mergeToDown.sort(a);
    } else if (this.mergeInSpace) {
      this.mergeInSpace.sort(a);
    }
  }
}
