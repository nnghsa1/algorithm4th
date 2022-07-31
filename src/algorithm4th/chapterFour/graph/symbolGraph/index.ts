import { Graph } from '..';

class SymbolGraph {
  private st: Map<string, number>;

  private keys: string[];

  public constructor(strs: string[]) {
    // 1. 构建符号表
    this.st = new Map<string, number>();
    strs.forEach(str => {
      if (!this.st.get(str)) {
        this.st.set(str, this.st.size);
      }
    });
    // 2.构建反向索引表
    this.keys = new Array<string>(this.st.size);
    const iterator = this.st.keys();
    let value = iterator.next().value as string;
    while (value) {
      const index = this.st.get(value) as number;
      this.keys[index] = value;
      value = iterator.next().value;
    }

    // 3. 构造图
    strs.forEach(str => {
      const v = this.st.get(str) as number;
      // 随机构建一个关系图
      const ram = this.keys[Math.random() * this.st.size];
      const G = new Graph(this.st.size);
      G.addEdge(v, this.st.get(ram) as number);
    });
  }

  /**
   * key是一个顶点吗
   * @param key
   * @returns
   */
  public contains(key: string): boolean {
    return !!this.st.get(key);
  }

  /**
   * key的索引
   * @param key
   * @returns
   */
  public index(key: string) {
    return this.st.get(key);
  }

  /**
   * 索引v的顶点名
   * @param v
   * @returns
   */
  public name(v: number) {
    return this.keys[v];
  }
}

export { SymbolGraph };
