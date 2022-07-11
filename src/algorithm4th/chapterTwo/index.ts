// import { Insertion } from './Insertion';
// import { Selection } from './selection';
// import Shell from './shell';

import Merge from './merge';

(function () {
  const a = [];

  for (let i = 0; i < 20; i++) {
    a.push(Math.floor(Math.random() * 20));
  }

  console.log('a', a);
  // const sort = new Selection();
  // const sort = new Insertion();
  // const sort = new Shell();
  const sort = new Merge();
  sort.sort(a);
  sort.show(a);
})();
