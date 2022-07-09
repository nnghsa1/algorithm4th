// import { Insertion } from './Insertion';
// import { Selection } from './selection';
// import Shell from './shell';

import Merge from "./merge";

(function () {
  const a = [6, 7, 1, 2, 5, 8, 3, 4];
  // const sort = new Selection();
  // const sort = new Insertion();
  // const sort = new Shell();
  const sort = new Merge();
  sort.sort(a);
  sort.show(a);
})();
