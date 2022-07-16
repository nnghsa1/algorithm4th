import { BaseSort } from '../base';

/**
 * 选择排序
 */
class Selection extends BaseSort {
  public sort(a: any[]) {
    const len = a.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j > 0; j--) {
        if (a[j] < a[j - 1]) {
          // 交换位置
          this.exch(a, j - 1, j);
        }
      }
    }
  }
}

export { Selection };
