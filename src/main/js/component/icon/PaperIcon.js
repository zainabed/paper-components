import { PaperComponent } from '../lib/PaperComponent.js';

/**
 * @ngdoc directive
 * @module component
 * @name icon
 * @description
 * A button is wrapper for HTML button usin material design principle.
 *
 * @usage
 * Cards are a convenient means of displaying content composed of different elements. They’re also well-suited for showcasing
 * elements whose size or supported actions vary, like photos with captions of variable length.
 *
 * @example
 * <example name="icon">
 * <file name="index.html">
 * <paper-icon name="add"></paper-icon>
 * <paper-icon size="large" name="add"></paper-icon>
 * </file>
 * </example>
 */
export class PaperIcon extends PaperComponent {

	constructor() {
		super();
		this.id = 'paper-icon';
		this.name = null;
		this.size = null;
		this.theme = null;
		this._svg = null;
		this.content = `
     	<%conent%>
     	`;
	}

	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	set size(size) {
		this._size = size || 'small';
	}

	get size() {
		return this._size;
	}


	set theme(theme) {
		this._theme = theme || 'light';
	}

	get theme() {
		return this._theme;
	}



	static get observedAttributes() {
		return ['name', 'size', 'theme'];
	}

	render() {
		super.render();

		let symbolDom = document.getElementById(this.name);
		let pathDom = null;
		/* istanbul ignore else */
		if (symbolDom != null) {
			let symbol = symbolDom.querySelector('path');
			pathDom = symbol.cloneNode(true);
		}
		/* istanbul ignore else */
		if (this.dom != null && pathDom != null) {
			let childNode = this.dom.firstElementChild;

			if (childNode) {
				this.dom.removeChild(childNode);
			}

			this.dom.appendChild(pathDom);

		}

		this.updateClass();
	}

	updateClass() {
		/* istanbul ignore else */
		if (this.dom) {
			this.dom.setAttribute('class', 'icon icon--size-' + this.size + ' icon--theme-' + this.theme);
		}
	}

	connectedCallback() {
		super.connectedCallback();
	}



}

//window.customElements.define("paper-icon",PaperIcon);