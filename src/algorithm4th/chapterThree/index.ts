import { SequentailSearchST } from './sequentialSearchST';

(function() {
  const st = new SequentailSearchST();

  for (let i = 0; i < 10; i++) {
    const key = String(Math.random() * 100);
    const value = String(Math.random() * 1000);
    st.put(key, value);
  }
  st.show();
})();
