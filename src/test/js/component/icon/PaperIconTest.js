import { Expect, Sinon, Chai } from '../../lib/Chai.js';
import { PaperIcon } from '../../../../main/js/component/icon/PaperIcon.js';

suite('Unit test cases for PaperIcon class.\n', () => {
	let icon = null;
	let value = null;
	let dom = Chai.spy.object(['removeChild', 'appendChild']);
	dom.classList = Chai.spy.object(['remove', 'add']);

	setup(() => {
		PaperIcon.prototype.createShadowRoot = Sinon.stub();
		PaperIcon.prototype.addEventListener = Sinon.stub();
		PaperIcon.prototype.createShadowRoot.returns({
			querySelector: Sinon.stub().returns(dom)
		});
		global.document = {
			getElementById: Sinon.stub()
		};

		icon = new PaperIcon();

		// call initialization method.
		icon.connectedCallback();
	});

	teardown(() => {
		icon = null;
	});

	test('Class should be defined.\n', () => {
		Expect(icon).to.be.an('object');
	});

	suite('Test cases for theme property.\n', () => {

		test('Theme property should set \'light\' property if given value is null.\n', () => {
			icon.theme = null;
			Expect(icon.theme).to.equal('light');
		});

		test('Theme setter should set value if given value is light.\n', () => {
			value = 'light';
			icon.theme = value;
			Expect(icon.theme).to.equal(value);
		});

		test('Theme property should set value if give value is dark.\n', () => {
			value = 'dark';
			icon.theme = value;
			Expect(icon.theme).to.equal(value);
		});
	});

	suite('Test cases for size property.\n', () => {
		test('If given value is empty or null then size property should set small value.\n', () => {
			value = null;
			icon.size = value;
			Expect(icon.size).to.equal('small');
		});

		test('size property should set value if it is non empty.\n', () => {
			value = 'large';
			icon.size = value;
			Expect(icon.size).to.equal(value);
		});
	});

	test('Name field should store value provided to it\'s setter.\n', () => {
		value = 'icon';
		icon.name = value;
		Expect(icon.name).to.equal(value);
	});

	suite('Test cases for \'observedAttributes\' method.\n', () => {
		let attributes = null;
		setup(() => {
			attributes = PaperIcon.observedAttributes;
		});

		test('attributes should be a type of Array.\n', () => {
			Expect(attributes).to.be.an('array');
		});

		test('attributes should have value theme.\n', () => {
			Expect(attributes.indexOf('theme')).to.not.equal(-1);
		});

		test('attributes should have value size.\n', () => {
			Expect(attributes.indexOf('size')).to.not.equal(-1);
		});

		test('attributes should have value name.\n', () => {
			Expect(attributes.indexOf('name')).to.not.equal(-1);
		});
	});

	suite('Test case for render method.\n', () => {
		setup(() => {
			let symbol = Chai.spy.object(['cloneNode']);
			symbol.cloneNode = Sinon.stub().returns({});
			let symbolDom = Chai.spy.object(['querySelector']);
			symbolDom.querySelector = Sinon.stub().returns(symbol)
			global.document.getElementById.returns(symbolDom);

			
		});

		test('Dom appendChild should have been called.\n', () =>{
			icon.render();
			Expect(dom.appendChild).to.have.been.called();
		});

		test('Dom removeChild should have beend called.\n', () => {
			dom.firstElementChild = {};
			icon.render();
			Expect(dom.removeChild).to.have.been.called();
		});

	});
});