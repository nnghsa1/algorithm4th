export default class UF {
  private _id: any[];
  private _count: number;
  constructor() {
    this._id = [];
    this._count = 0;
  }

  /**
   * 在p和q之间添加一条连接
   */
  unoin(p: number, q: number) {

  }

  /** 
  * p（0 到 N-1）所在的分量的标识符
  */
  find(p: number) {

  }

  /**
   * 如果p和q存在于同一个分量中则返回true
   * @param p 
   * @param q 
   */
  connected(p: number, q: number) {
    return true;
  }

  /**
   * 连通分量的数量
   */
  count() {
    return this._count;
  }

}

(function() {
  const getTwoInt = (range: number ) => {
    const p = Math.floor(Math.random() * range);
    const q = Math.floor(Math.random() * range);
    return { p, q };
  }

  const uf = new UF();
  const num = 10;

  for(let i = 0; i < num; i++) { 
    // 读取整数
    const { p, q }  = getTwoInt(10);
    // 如果已经连通则忽略
    if (uf.connected(p, q)) {
      continue;
    }
    uf.unoin(p, q);
    console.log(q ,'-', p);
  }

  console.log(uf.count() , 'components')

})()