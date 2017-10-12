// Import chai.
let chai = require('chai'),
  path = require('path');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

import {PaperButton} from '../../../../main/js/component/button/button.js';

describe('Unit test Button class', function(){
	var button = null;
	beforeEach(function(){
		button = new PaperButton();
	});

	it('Button object should exist.\n', function(){
		chai.expect(button).to.be.an('object');
	});

	it('Button title should be test', function(){
		button.title = 'test';
		chai.expect(button.title).to.equal('test');
	});
})