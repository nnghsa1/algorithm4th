class QuickFind {
  id: any[];
  constructor(id: any[]) {
    this.id = id;
  }
  find(p: number) {
    return this.id[p];
  }

  union(p: number, q: number) {
    const pId = this.find(p);
    const qId = this.find(q);

    if (pId === qId) return;

    for (let i = 0; i < this.id.length; i++) {
      if (pId === this.id[i]) {
        this.id[i] = qId;
      }
    }
  }
}

class QuickUnion {
  id: any[];
  constructor(id: any[]) {
    this.id = id;
  }
  union(p: number, q: number) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);
    if (pRoot === qRoot) return;
    this.id[pRoot] = qRoot;
  }

  find(p: number) {
    while (p !== this.id[p]) {
      p = this.id[p];
    }
    return p;
  }
}

/**
 * 加权quick-union
 * 详细见 144页
 */
class WeightQuickUnion extends QuickUnion {
  size: any[];
  constructor(id: any[]) {
    super(id);
    this.size = [];
    id.forEach((id, index) => {
      this.size.push (1);
    });
  }
  union(p: number, q: number) {
    const i = this.find(p);
    const j = this.find(q);
    if (i === j) return;
    if (this.size[i] < this.size[j]) {
      this.id[i] = j;
      this.size[j] += this.size[i];
    } else {
      this.id[j] = i;
      this.size[i] = this.size[j];
    }
  }
}

/**
 * 路径压缩的加权quick-union
 */
class PathCompressWeightQuickUinon extends WeightQuickUnion {
  root: any[];
  constructor(id: any) {
    super(id);
    this.root = [];
    this.id.forEach((id, index) => {
      this.root.push({
        index,
        root: undefined,
      });
    });
  }

  find(p: number) {
    while (p !== this.id[p]) {
      const temp = this.id[p];
      this.id[p] = this.id[this.id[p]];
      p = temp;
    }
    return p;
  }
}

export default class UF {
  private _id: any[];
  private _count: number;
  quickFind: QuickFind | undefined;
  quickUnion: QuickFind | undefined;
  weightQuickUnion: QuickFind | undefined;
  pathCompressWeightQuickUinon: PathCompressWeightQuickUinon | undefined;
  constructor(num: number) {
    this._id = [];
    this._count = 0;

    for (let i = 0; i < num; i++) {
      this._id[i] = i;
    }

    // this.quickFind = new QuickFind(this._id);
    // this.quickUnion = new QuickUnion(this._id);
    // this.weightQuickUnion = new WeightQuickUnion(this._id);
    this.pathCompressWeightQuickUinon = new PathCompressWeightQuickUinon(this._id);
  }

  /**
   * 在p和q之间添加一条连接
   */
  unoin(p: number, q: number) {
    if (this.quickFind) {
      this.quickFind.union(p, q);
    } else if (this.quickUnion) {
      this.quickUnion.union(p, q);
    } else if (this.weightQuickUnion) {
      this.weightQuickUnion.union(p, q);
    } else if (this.pathCompressWeightQuickUinon) {
      this.pathCompressWeightQuickUinon.union(p, q);
    }
  }

  /**
   * p（0 到 N-1）所在的分量的标识符
   */
  find(p: number) {
    let res;
    if (this.quickFind) {
      res = this.quickFind.find(p);
    } else if (this.quickUnion) {
      res = this.quickUnion.find(p);
    } else if (this.weightQuickUnion){
      res = this.weightQuickUnion.find(p);
    } else {
      res = this.pathCompressWeightQuickUinon?.find(p);
    }
    return res;
  }

  /**
   * 如果p和q存在于同一个分量中则返回true
   * @param p
   * @param q
   */
  connected(p: number, q: number) {
    const resP = this.find(p);
    const resQ = this.find(q);
    return resP === resQ;
  }

  /**
   * 连通分量的数量
   */
  count() {
    return this._count;
  }

  getIds() {
    return this._id;
  }
}

const getParams = (i: number) => {
  const a = [
    { p: 4, q: 3 },
    { p: 6, q: 5 },
    { p: 3, q: 8 },
    { p: 9, q: 4 },
    { p: 2, q: 1 },
    { p: 8, q: 9 },
    { p: 5, q: 0 },
    { p: 7, q: 2 },
    { p: 6, q: 1 },
    { p: 1, q: 0 },
    { p: 6, q: 7 },
  ];
  return a[i];
};

(function () {
  const num = 10;
  const uf = new UF(num);

  for (let i = 0; i < num; i++) {
    // 读取整数
    const { p, q } = getParams(i);
    // 如果已经连通则忽略
    if (uf.connected(p, q)) {
      continue;
    }
    uf.unoin(p, q);
    console.log(q, '-', p);
  }

  console.log(uf.getIds());

  const test1 = 3,
    test2 = 4;
  const res = uf.connected(test1, test2);
  if (res) {
    console.log('相通');
  } else {
    console.log('不相通');
  }
})();
