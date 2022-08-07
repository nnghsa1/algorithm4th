import type { DiGraph } from '..';
import { Queue, Stack } from '../../../../utils';
import DirectedCycle from '../directedCycle';

class DepthFirstOrder {
  private pre: Queue<number>;

  private post: Queue<number>;

  private reversePost: Stack<number>;

  private marked: boolean[];

  public constructor(G: DiGraph) {
    // 所有顶点的前序遍历
    this.pre = new Queue<number>();
    // 所有顶点的后序遍历
    this.post = new Queue<number>();
    // 所有顶点的逆后序遍历
    this.reversePost = new Stack<number>();
    this.marked = new Array<boolean>(G.V());

    for (let i = 0; i < G.V(); i++) {
      if (!this.marked[i]) {
        this.dfs(G, i);
      }
    }
  }

  public getPre() {
    return this.pre;
  }

  public getPost() {
    return this.post;
  }

  public getReversePost() {
    return this.reversePost;
  }

  private dfs(G: DiGraph, v: number) {
    this.pre.enqueue(v);
    this.marked[v] = true;
    G.adj(v).forEach((w) => {
      if (!this.marked[w]) {
        this.dfs(G, w);
      }
    });
    this.post.enqueue(v);
    this.reversePost.push(v);
  }
}

class Topological {
  private order: any;

  public constructor(G: DiGraph) {
    const cyclefinder = new DirectedCycle(G);
    this.order = undefined;
    if (!cyclefinder.hasCycle()) {
      const dfo = new DepthFirstOrder(G);
      this.order = dfo.getReversePost();
    }
  }

  public getOrder() {
    return this.order;
  }

  /**
   * 是否为有向无环图
   * @returns boolean
   */
  public isDAG() {
    return !!this.order;
  }
}

export { DepthFirstOrder, Topological };
