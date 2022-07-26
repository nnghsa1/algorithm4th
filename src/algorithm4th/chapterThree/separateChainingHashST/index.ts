import type { Key } from '../../../utils';
import { SequentailSearchST } from '../sequentialSearchST';

/**
 * 基于拉链法的散列表
 */
class SeparateChainingHashST {
  public N: number;

  public M: number;

  public st: SequentailSearchST[];

  public constructor(M = 997) {
    // 键值对总数
    this.N = 0;
    // 散列表大小
    this.M = M;
    // 存放链表对象的数组
    this.st = [];
    for (let i = 0; i < M; i++) {
      this.st.push(new SequentailSearchST());
    }
  }

  public get(key: Key) {
    return this.st[this.hash(key)].get(key);
  }

  public put(key: Key, value: any) {
    this.st[this.hash(key)].put(key, value);
  }

  private hash(key: Key) {
    return (key.hashCode() & 0x7fffffff) % this.M;
  }
}
export { SeparateChainingHashST };
