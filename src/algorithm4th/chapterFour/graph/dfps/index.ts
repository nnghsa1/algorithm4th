import type { Graph } from '..';

/**
 * 使用深度优先搜索查找图中的路径
 */
class DFPS {
  // 这个顶点调用过dfs()了吗？
  public marked: boolean[];

  // 从起点到一个顶点的已知路径上的最后一个顶点
  public edgeTo: number[];

  // 起点
  public s: number;

  public constructor(G: Graph, s: number) {
    this.marked = new Array(G.V());
    this.marked.fill(false);
    this.edgeTo = new Array(G.V());
    this.edgeTo.fill(0);
    this.s = s;
    this.dfs(G, s);
  }

  public hasPathTo(v: number): boolean {
    return this.marked[v];
  }

  public pathTo(v: number): Array<number> {
    const path: number[] = [];
    if (!this.hasPathTo(v)) {
      return [];
    }
    for (let x = v; x != this.s; x = this.edgeTo[x]) {
      path.push(x);
    }
    return path;
  }

  private dfs(G: Graph, v: number) {
    this.marked[v] = true;
    G.adj(v).forEach((w) => {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.dfs(G, w);
      }
    });
  }
}

export {
  DFPS,
};
