
class BaseSort {
  sort(a: any[]) {

  }

  less() {
    return false;
  }

  /**
   * 交换数组a的i，j位置 
   * @param a 
   * @param i 
   * @param j 
   */
  exch(a: any[], i: number, j: number) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }

  show(a: any[]) {
    console.log(a);
  }

  isSorted() {

  }

  
}
export {
  BaseSort
}