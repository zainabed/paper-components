const chai =  require('chai');
const sinon = require('sinon');
const spies = require('chai-spies');

chai.use(spies);

export var Chai = chai;
export var Expect = chai.expect;
export var Sinon = sinon;