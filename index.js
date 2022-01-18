/*
const Person = require('./Person');

const person1 = new Person('John Doe', 30);

person1.greeting();
*/

const Logger = require('./Logger');

const logger = new Logger();

logger.on('message', (data) => console.log(`Called listern`))