import type { DiGraph } from '..';

/**
 * 有向图的可达性
 */
export default class DirectedDFS {
  public marked: boolean[];

  public constructor(G: DiGraph, s: number) {
    this.marked = new Array<boolean>(G.V());
    this.dfs(G, s);
  }

  private dfs(G: DiGraph, v: number) {
    this.marked[v] = true;
    G.adj(v).forEach(w => {
      if (!this.marked[w]) {
        this.dfs(G, w);
      }
    });
  }
}
