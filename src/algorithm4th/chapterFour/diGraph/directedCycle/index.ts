import type { DiGraph } from '..';

export default class DirectedCycle {
  public onStack: boolean[];

  public edgeTo: number[];

  public marked: boolean[];

  public cycle: number[];

  public constructor(G: DiGraph) {
    this.onStack = new Array<boolean>(G.V());
    this.edgeTo = new Array<number>(G.V());
    this.marked = new Array<boolean>(G.V());
    this.cycle = [];
    for (let i = 0; i < G.V(); i++) {
      if (!this.marked[i]) {
        this.dfs(G, i);
      }
    }
  }

  public hasCycle(): boolean {
    return this.cycle.length > 0;
  }

  public getCycle(): number[] {
    return this.cycle;
  }

  private dfs(G: DiGraph, v: number): void {
    this.onStack[v] = true;
    this.marked[v] = true;
    G.adj(v).forEach(w => {
      if (this.hasCycle()) {
        return;
      } else if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.dfs(G, w);
      } else if (this.onStack[w]) {
        this.cycle = new Array<number>();
        for (let x = v; x !== w; x = this.edgeTo[x]) {
          this.cycle.push(x);
        }
        this.cycle.push(w);
        this.cycle.push(v);
      }
    });
    this.onStack[v] = false;
  }
}
