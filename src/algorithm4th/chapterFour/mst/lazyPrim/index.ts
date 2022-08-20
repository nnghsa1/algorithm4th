import type { Edge, EdgeWeightedGraph } from "..";
import { Queue } from "../../../../utils";
import { MinPQ } from "../../../chapterTwo/priorityQueue";

export default class LazyPrim {
  private pq: MinPQ<Edge>;
  
  private marked: boolean[];

  private mst: Queue<Edge>;

  public constructor(G: EdgeWeightedGraph) {
    // 横切边
    this.pq = new MinPQ<Edge>();
    // 最小生成树的顶点
    this.marked = new Array<boolean>(G.V());
    // 最小生成树的边（包括失效的边）
    this.mst = new Queue<Edge>();

    this.visit(G, 0);
    while (!this.pq.isEmpty()) {
      const e = this.pq.delMin();
      const v = e.either();
      const w = e.other(v);
      if (this.marked[v] && this.marked[w]) {
        continue;
      }
      this.mst.enqueue(e);
      if (!this.marked[v]) {
        this.visit(G, v);
      }
      if (this.marked[w]) {
        this.visit(G, w);
      }
    }
  }

  public edges() {
    return this.mst;
  }

  private visit(G: EdgeWeightedGraph, v: number) {
    this.marked[v] = true;
    G.adj(v).forEach((e) => {
      if (!this.marked[e.other(v)]) {
        this.pq.insert(e);
      }
    });
  }
}
