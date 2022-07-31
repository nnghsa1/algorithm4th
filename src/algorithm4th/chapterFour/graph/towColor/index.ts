import type { Graph } from '..';

class TwoColor {
  public marked: boolean[];

  public color: boolean[];

  public isTwoColor: boolean;

  public constructor(G: Graph) {
    this.marked = new Array<boolean>(G.V());
    this.color = new Array<boolean>(G.V());
    this.isTwoColor = true;

    for (let i = 0; i < G.V(); i++) {
      if (!this.marked[i]) {
        this.dfs(G, i);
      }
    }
  }

  public isBipartite(): boolean {
    return this.isTwoColor;
  }

  private dfs(G: Graph, v: number) {
    this.marked[v] = true;
    G.adj(v).forEach(w => {
      if (!this.marked[w]) {
        this.color[w] = !this.color[v];
        this.dfs(G, w);
      } else if (this.color[w] === this.color[v]) {
        this.isTwoColor = false;
      }
    });
  }
}

export { TwoColor };
