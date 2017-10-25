import { PaperButton } from '../../../../main/js/component/button/PaperButton';
import { PaperComponent } from '../../../../main/js/component/lib/PaperComponent';
import { Expect, Sinon } from '../../lib/Chai';

suite('Unit test Button class', () => {
	let button = null;
	setup(() => {
		Sinon.stub(PaperComponent.prototype, 'connectedCallback');
		button = new PaperButton();
		button.connectedCallback();
	});

	teardown(() => {
		button = null;
		PaperComponent.prototype.connectedCallback.restore();
		
	});

	test('Button object should exist.\n', () => {
		Expect(button).to.be.an('object');
	});

	test('Button title should be test', () => {
		button.title = 'test';
		Expect(button.title).to.equal('test');
	});

	test('Field disable should set value as boolean true if string \'true\' is passed.\n', () => {
		button.disable = 'true';
		Expect(button.disable).to.be.true;
	});

	test('Field disable should set value as boolean false if pass value is not string \'true\'. \n', () => {
		button.disable = 'false';
		Expect(button.disable).to.be.false;
	});

	test('Default value of field type should be \'raised\'.\n', () => {
		button.type = null;
		Expect(button.type).to.equal('raised');
	});

	test('Setter & getter for field type should work if value is passed to it.\n', () => {
		button.type = 'test';
		Expect(button.type).to.equal('test');
	});

	suite('Test case for observedAttributes method\n', () => {
		let attributes = null;
		setup(() => {
			attributes = PaperButton.observedAttributes;
		});

		test('attributes should contain value title.\n', () => {
			Expect(attributes.indexOf('title')).to.not.equal(-1);
		});

		test('attributes should contain value type.\n', () => {
			Expect(attributes.indexOf('type')).to.not.equal(-1);
		});

		test('attributes should contain value disable.\n', () => {
			Expect(attributes.indexOf('disable')).to.not.equal(-1);
		});
	});

	suite('Test cases for updateClass method.\n', () => {
		setup(() => {
			button.dom = {};
		});

		test('Default value of Dom class should be \'button button--type-raised\'.\n', () => {
			button.updateClass();
			Expect(button.dom.className).to.equal('button button--type-raised');
		});

		test('Dom class should change its value when button type is changed.\n', () => {
			button.type = 'flat';
			button.updateClass();
			Expect(button.dom.className).to.equal('button button--type-flat');
		});

		test('Dom class should include disable class when button is disabled.\n', () => {
			button.disable = 'true';
			button.updateClass();
			Expect(button.dom.className).to.equal('button button--type-raised button--disable');
		});
	});

	suite('Test cases for render method.\n', () => {
		let value = 'test';
		setup(() => {
			button.dom = {};
			//Sinon.stub(PaperComponent.prototype, 'render');
			button.updateClass = Sinon.stub();
			button.title = value;
		});

		test('Render method should update Dom\'s innerHTML with button title value.\n', () => {
			button.render();
			Expect(button.dom.innerHTML).to.equal(value);
		});

		test('Render method should add paper icon component if button type is \'Fab\'.\n', () => {
			button.type = 'fab';
			button.render();
			Expect(button.dom.innerHTML).to.equal('<paper-icon name="' + value + '"></paper-icon>');
		});
	});

	
})