import type { Graph } from '..';
class Cycle {
  public marked: boolean[];

  public color: boolean[];

  public _hasCycle: boolean;

  public constructor(G: Graph) {
    this.marked = new Array<boolean>(G.V());
    this.color = new Array<boolean>(G.V());
    this._hasCycle = true;

    for (let i = 0; i < G.V(); i++) {
      if (!this.marked[i]) {
        this.dfs(G, i, i);
      }
    }
  }

  public hasCycle() {
    return this._hasCycle;
  }

  private dfs(G: Graph, i: number, u: number): void {
    this.marked[i] = true;
    G.adj(i).forEach(w => {
      if (!this.marked[w]) {
        this.dfs(G, w, i);
      } else if (w !== u) {
        this._hasCycle = true;
      }
    });
  }
}

export { Cycle };
