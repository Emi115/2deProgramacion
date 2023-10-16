const faker = require('faker');
const chalk = require('chalk');

const randomName = faker.name.findName();
const randomColor = chalk.keyword(faker.internet.color());

console.log(randomColor(randomName));
