import { BaseSort } from "../base";


// 一般都用数组来表示堆，i结点的父结点下标就为(i–1)/2。
// 它的左右子结点下标分别为2 * i + 1和2 * i + 2。如第0个结点左右子结点下标分别为1和2。
interface PriorityQueue {
  isEmpty: () => boolean;
  size: () => number;
  insert: (value: any) => void;
  delMax: () => void;
}

class MaxPQ extends BaseSort implements PriorityQueue {
  private pq: any[];
  private N: number;
  public constructor() {
    super();
    this.pq = [];
    this.N = 0;
  }

  public isEmpty() {
    return this.N === 0;
  }

  public size() {
    return this.N;
  }

  public insert(v: any): void {
    this.pq[this.N] = v;
    this.swim(this.N);
    this.N++;
  }

  public delMax(): void {
    const max = this.pq[0];
    this.exch(this.pq, 0, this.N--);
    this.pq.pop();
    this.sink(0);
    return max;
  }

  public less(a: number, b: number) {
    return this.pq[a] < this.pq[b];
  }

  public getPQ() {
    return this.pq;
  }

  private swim(k: number) {
    let index = k;
    while (index > 0 && this.less(Math.floor((index - 1) / 2), index)) {
      this.exch(this.pq, Math.floor((index - 1) / 2), index);
      index = Math.floor((index - 1) / 2);
    }
  }

  private sink(k: number) {
    let index = k;
    while (2 * index + 1 < this.N) {
      let j = 2 * index + 1;
      if (j < this.N && this.less(j, j + 1)) {
        j++;
      }
      if (this.less(index, j)) {
        break;
      }
      this.exch(this.pq, index, j);
      index = j;
    }
  }
}

class HeapSort extends BaseSort {
  public constructor() {
    super();
  }
  public sort(a: any[]) {
    // 1. 先构建一个大根堆
    const maxHeap = this.buildMaxHeap(a);
    let len = maxHeap.length;
    // 2.每一次将大根堆的最末尾节点与大根堆的第一个节点交换位置
    while (len > 1) {
      this.exch(maxHeap, 0, len - 1);
      this.sink(maxHeap, 0, len - 1);
      len--;
    }
    maxHeap.forEach((num, index) => {
      a[index] = num;
    });
  }

  private sink(a: any[], k: number, n: number) {
    let index = k;
    while (2 * index + 1 < n) {
      let j = 2 * index + 1;
      if (j + 1 < n && (a[j] < a[j + 1])) {
        j++;
      }
      if ((a[index] >= a[j])) {
        break;
      }
      this.exch(a, index, j);
      index = j;
    }
  }

  /**
   * 构建大根堆
   * @param a 
   * @returns 
   */
  private buildMaxHeap(a: any[]) {
    const len = a.length;
    const pq = new MaxPQ();
    for (let i = 0; i < len; i++) {
      pq.insert(a[i]);
    }
    return [...pq.getPQ()];
  }
}

export { MaxPQ, HeapSort };
