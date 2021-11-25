const faker = require('faker');


let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let date = faker.date.past();

console.log(firstName + " " + lastName + 
" died on " + date);

//npm i faker ---- installs faker
