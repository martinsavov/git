function hello(name) {
    alert(`Hello ${name}`);
}

function goodbye(name) {
    alert(`Bye ${name}`)
}

export { hello as hi, goodbye as bye };

export default class Name {
    constructor(name) {
        this.name = name
    }
}

// import { hello as hi, goodbye as bye };


// import {name} from './names.js';

// alert(name);


// import { user } from './index.js';
// console.log(user.name);
