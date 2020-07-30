// import { hello } from './hello.js';

// console.log(name);
// hello('Aleks');

// alert('opa');
// import { generateTable } from './table.js';

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response => response.json())
// .then(data => generateTable(data) );

// import { user } from './names.js';
// console.log(user.name);
// user.name = 'Gosho';
// console.log(user.name);

// export { user };

// let person = {
//     name: 'Ivan'
// }

// console.log(person.name);
// person.name = 'Stan';
// console.log(person.name);
// person.name = 'Iveto';
// console.log(person.name);

/**
 *  TASK: EXPORT string, const, array and class
 */

// import { hi, bye } from './hello.js';
// import * as talk from './hello.js';
// talk.hello('Aleks');
// talk.goodbye('Aleks');
// hi('Aleks');
// bye('Aleks');

// import MyName, { hi, bye} from './hello.js';

// new MyName('Aleks');
// hi('Aleks');
// bye('Aleks');

/**
 * import fetchfunction from api.js
 * import createTable from table.js
 * 
 * call both functions
 * and display the table
 */

import { generateTable } from './table.js';
import { getData } from './api.js';

getData('https://jsonplaceholder.typicode.com/todos',
            generateTable);








