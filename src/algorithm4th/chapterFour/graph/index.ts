/**
 * 无向图
 */

import type { IGraph } from '../interface';

class Graph implements IGraph {
  private _adj: Array<number>[];

  private _V: number;

  private _E: number;

  public constructor(v: number) {
    this._adj = new Array(v);
    this._V = v;
    this._E = 0;
    for (let i = 0; i < v; i++) {
      this._adj[i] = [];
    }
  }

  public V() {
    return this._V;
  }

  public E() {
    return this._E;
  }

  public addEdge(v: number, w: number) {
    this._adj[v].push(w);
    this._adj[w].push(v);
    this._E++;
  }

  /**
   *  和v相邻的所有顶点
   */
  public adj(v: number) {
    return this._adj[v];
  }

  public toString() {
    return JSON.stringify(this);
  }
}

export { Graph };
