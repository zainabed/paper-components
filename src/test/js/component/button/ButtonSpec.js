// Import chai.
let chai = require('chai'),
  path = require('path');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import the Rectangle class.
//let Base = require(path.join(__dirname, '../../../../main/js/component/lib', 'BaseElement'));
//let Button = require(path.join(__dirname, '../../../../main/js/component/button', 'button'));

import {Button} from './button.js';

describe('Unit test Button class', function(){
	var button = null;
	beforeEach(function(){
		button = new Button();
	});

	it('Button object should exist.\n', function(){
		chai.expect(button).to.be.an('object');
	});

	it('Button title should be test', function(){
		chai.expect(button.title).to.equal('test');
	});
})