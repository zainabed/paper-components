import {PaperButton} from './button.js';

describe('Unit test for Button class.\n', function(){
	let button = new PaperButton();
  it('test', function(){
  		button.title = 'test';
  		expect(button.title).toEqual('test');
  });

});