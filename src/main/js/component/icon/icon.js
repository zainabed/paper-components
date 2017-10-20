import {BaseElement} from '../lib/BaseElement.js';

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
class PaperIcon extends BaseElement {
	
	constructor(){
		super();
		this._name = null;
		this._size = 'small';
		this._style =  null;
		this._svg = null;
		this._theme = 'light';
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

	set theme(theme){
		this._theme = theme;
	}

	get theme(){
		return this._theme;
	}

	static get observedAttributes() {
		return ['name', 'size', 'style', 'theme'];
	}

	render(){
		super.render();

		let svgIcon  = this.querySelectorById('svg-icon');
		let symbolDom = document.getElementById(this._name);
		let pathDom = null;
		if(symbolDom != null ){
			let symbol = symbolDom.querySelector('path');
			pathDom = symbol.cloneNode(true);
		}


		if(svgIcon !=null && pathDom !=null){
			svgIcon.appendChild(pathDom) ;
		}


	}

	connectedCallback() {
		super.connectedCallback();
	}



}

//window.customElements.define("paper-icon",PaperIcon);