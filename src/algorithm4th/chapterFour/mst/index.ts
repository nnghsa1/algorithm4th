import { Bag } from '../../../utils';
import type { IComparable } from '../../../utils';


class Edge implements IComparable<Edge> {
  private v: number;

  private w: number;

  private weight: number;

  public constructor(v: number, w: number, weight: number) {
    this.v = v;
    this.w = w;
    this.weight = weight;
  }

  public getWeight(): number {
    return this.weight;
  }

  public either() {
    return this.v;
  }

  public other(vertex: number) {
    if (vertex === this.v) {
      return this.w;
    } else if (vertex === this.w) {
      return this.v;
    }
    return 0;
  }

  public compareTo(t: Edge) {
    if (this.getWeight() < t.getWeight()) {
      return -1;
    } else if (this.getWeight() > t.getWeight()) {
      return 1;
    }
    return 0;
  }

  public toString(): string {
    return this.toString();
  }
}

class EdgeWeightedGraph {
  private _V: number;

  private _E: number;
  
  private _adj: Bag<Edge>[];

  public constructor(v: number) {
    this._V = v;
    this._E = 0;
    this._adj = new Array<Bag<Edge>>(v);
    for (let i = 0; i < v; i++) {
      this._adj[i] = new Bag<Edge>();
    }
  }

  public V() {
    return this._V;
  }

  public E() {
    return this._E;
  }

  public addEdge(edge: Edge) {
    const v = edge.either();
    const w = edge.other(v);
    this._adj[v].add(edge);
    this._adj[w].add(edge);
  }

  public adj(v: number) {
    return this._adj[v];
  }

}

export { Edge, EdgeWeightedGraph };
