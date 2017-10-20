import {Expect} from '../../lib/Chai.js';
import {PaperIcon} from '../../../../main/js/component/icon/PaperIcon.js';

suite('Unit test cases for PaperIcon class.\n', () => {
	let icon = null;

	setup(() => {
		icon = new PaperIcon();
	});

	teardown(() => {
		icon = null;
	});

	test('Class should be defined.\n', () => {
		Expect(icon).to.be.an('object');
	});

	suite('Test cases for theme property.\n', () => {

		test('Theme property should set null property if given value isn\'t either light or dark.\n', () => {
			icon.theme = 'test';
			Expect(icon.theme).to.equal(null);
		});

		test('Theme setter should set value if given value is light.\n', () => {
			let value = 'light';
			icon.theme = value;
			Expect(icon.theme).to.equal(value);
		});

		test('Theme property should set value if give value is dark.\n', () => {
			let value = 'dark';
			icon.theme = value;
			Expect(icon.theme).to.equal(value); 
		});
	});

	suite('Test cases for size property.\n', () => {
		test('If given value is empty or null then size property should set small value.\n', () => {
			let value = null;
			icon.size = value;
			Expect(icon.size).to.equal('small');
		});

		test('size property should set value if it is non empty.\n', () => {
			let value = 'large';
			icon.size = value;
			Expect(icon.size).to.equal(value);
		});
	});
});