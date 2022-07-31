import type { Graph } from '..';

class CC {
  public marked: boolean[];

  public _id: number[];

  public _count: number;

  public constructor(G: Graph) {
    this.marked = new Array(G.V());
    this._id = new Array(G.V());
    this._count = 0;
  }

  /**
   * v和w是否相通
   */
  public connected(v: number, w: number) {
    return this._id[v] === this._id[w];
  }

  /**
   * 连通分量的标识符
   */
  public id(v: number) {
    return this._id[v];
  }

  /**
   * 连通分量数量
   */
  public count() {
    return this._count;
  }

  private dfs(G: Graph, v: number) {
    this.marked[v] = true;
    this._id[v] = this._count;
    G.adj(v).forEach(w => {
      if (!this.marked[w]) {
        this.dfs(G, w);
      }
    });
  }
}

export { CC };
