'use strict'
var currentDocument = document.currentScript.ownerDocument;

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
 * <paper-icon name="star"></paper-icon>
 * </file>
 * </example>
 */
class PaperIcon extends BaseElement {
	constructor(){
		super();
		this._name = null;
		this._size = 'small';
		this._style =  null;
		this.currentDocument = currentDocument;
	    this.content = `
	     <%conent%>
	     `;
	}

	set name(name) {
		this._name = name;
	}

	get name(){
		return this._name;
	}

	set size(size) {
		this._size = size;
	}

	get size(){
		return  this._size;
	}

	set style(style) {
		this._style = style;
		this.class= 'icon icon--' + this._size +  'material-icons ' + this._style;
	}

	get style(){
		return this._style;
	}

	static get observedAttributes() {
		return ['name', 'size', 'style'];
	}

	connectedCallback() {
	    super.connectedCallback();
	}


	
}

window.customElements.define('paper-icon', PaperIcon);