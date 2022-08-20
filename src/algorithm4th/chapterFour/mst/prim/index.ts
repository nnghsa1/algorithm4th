import type { Edge, EdgeWeightedGraph } from '..';
export default class PrimMST {
  private edgeTo: Edge[];

  private distTo: number[];

  private marked: boolean[];

  private pq: any;

  public constructor(G: EdgeWeightedGraph) {
    this.edgeTo = new Array<Edge>(G.V());
    this.distTo = new Array<number>(G.V());
    this.marked = new Array<boolean>(G.V());
    for (let i = 0; i < G.V(); i++) {
      this.distTo[i] = Infinity;
    }
    this.pq = new IndexMinPQ<number>(G.V());
    this.distTo[0] = 0;
    this.pq.insert(0, 0);
    while (!this.pq.isEmpty()) {
      this.visit(G, this.pq.delMin());
    }
  }

  private visit(G: EdgeWeightedGraph, v: number) {
    this.marked[v] = true;
    G.adj(v).forEach((e) => {
      const w = e.other(v);
      if (!this.marked[w]) {
        if (e.getWeight() > this.distTo[w]) {
          this.edgeTo = e;
          this.distTo = e.getWeight();
          if (this.pq.contains(w)) {
            this.pq.change(w, this.distTo[w]);
          } else {
            this.pq.insert(w, this.distTo[w]);
          }
        }
      }
    });
  }
}
