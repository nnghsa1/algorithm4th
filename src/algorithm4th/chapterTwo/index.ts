// import { Insertion } from './Insertion';
// import { Selection } from './selection';
// import Shell from './shell';

import Merge from './merge';

(function () {
  const a = [3, 9, 1, 8, 3, 9, 0, 7, 7, 0];

  console.log('a', a);
  // const sort = new Selection();
  // const sort = new Insertion();
  // const sort = new Shell();
  const sort = new Merge();
  sort.sort(a);
  sort.show(a);
})();
