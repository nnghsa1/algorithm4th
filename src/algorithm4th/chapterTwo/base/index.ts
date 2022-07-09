
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

  isSorted(a: any[]) {
    for (let i = 1; i < a.length; i++) {
      if (a[i] < a[i - 1]) {
        return false;
      }
    }
    return true;
  }

  
}
export {
  BaseSort
}