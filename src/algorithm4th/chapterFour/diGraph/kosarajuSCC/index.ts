import type { DiGraph } from '..';
import { DepthFirstOrder } from '../topological';

/**
 * 计算强连通分量的kosaraju算法
 */
class KosarajuScc {
  private marked: boolean[];

  private id: number[];

  private count: number;

  public constructor(G: DiGraph) {
    this.marked = new Array<boolean>(G.V());
    this.id = new Array<number>(G.V());
    this.count = 0;

    const order = new DepthFirstOrder(G.reverse());
    order.getReversePost().forEach(s => {
      if (!this.marked[s]) {
        this.dfs(G, s);
        this.count++;
      }
    });
  }

  public stronglyConnected(v: number, w: number) {
    return this.id[v] === this.id[w];
  }

  public getId(v: number): number {
    return this.id[v];
  }

  public getCount(): number {
    return this.count;
  }

  private dfs(G: DiGraph, s: number) {
    this.marked[s] = true;
    this.id[s] = this.count;
    G.adj(s).forEach(w => {
      if (!this.marked[w]) {
        this.dfs(G, w);
      }
    });
  }
}

export { KosarajuScc };
