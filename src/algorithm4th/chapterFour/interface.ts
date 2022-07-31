interface IGraph {
  // 顶点数
  V: () => number;
  // 边数
  E: () => number;
  // 向图中添加一条边v-w
  addEdge: (v: number, w: number) => void;
  // 和v相邻的所有顶点
  adj: (v: number) => any;
  // 对象的字符串表示
  toString: () => string;
}


export type { IGraph };
