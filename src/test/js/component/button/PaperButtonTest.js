import {PaperButton} from '../../../../main/js/component/button/PaperButton';
import {Expect, Sinon} from '../../lib/Chai';

suite('Unit test Button class', () => {
	var button = null;
	setup(() => {
		button = new PaperButton();
	});

	teardown(() => {
		button = null;
	});

	test('Button object should exist.\n', () => {
		Expect(button).to.be.an('object');
	});

	test('Button title should be test', () => {
		button.title = 'test';
		Expect(button.title).to.equal('test');
	});
})