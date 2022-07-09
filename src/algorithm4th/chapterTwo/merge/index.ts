import { BaseSort } from '../base';

/**
 * 原地归并
 */
class MergeInSpace {}

/**
 * 自顶向下
 */
class MergeToDown extends BaseSort {
  aux: any[];
  constructor() {
    super();
    this.aux = [];
  }
  merge() {

  }
  sort() {

  }
  _sort(){
    
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
      } else if (a[j] < a[i]) {
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
  constructor() {
    super();
    this.mergeToUp = new MergeToUp();
  }
  sort(a: any[]) {
    if (this.mergeToUp) {
      this.mergeToUp.sort(a);
    }
  }
}
