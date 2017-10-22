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
export class PaperIcon extends BaseElement {
	
	constructor(){
		super();
		this.id = 'paper-icon';
		this._name = null;
		this._style =  null;
		this._svg = null;
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
		this.removeClass('icon--size-' + this.size);
		this._size = size || 'small';
		this.addClass('icon--size-' + this.size);
	}

	get size(){
		return  this._size;
	}

	set style(style) {
		this._style = style || null ;
	}

	get style(){
		return this._style;
	}

	set theme(theme){
		this.removeClass('icon--theme-' + this.theme);
		this._theme = theme || 'light';
		this.addClass('icon--theme-' + this.theme);
	}

	get theme(){
		return this._theme;
	}

	

	static get observedAttributes() {
		return ['name', 'size', 'style', 'theme'];
	}

	render(){
		super.render();

		let symbolDom = document.getElementById(this._name);
		let pathDom = null;
		if(symbolDom != null ){
			let symbol = symbolDom.querySelector('path');
			pathDom = symbol.cloneNode(true);
		}

		if(this.dom !=null && pathDom !=null){
			let childNode  = this.dom.firstElementChild;
		
			if(childNode) {
				this.dom.removeChild(childNode) ;
			}
			
			this.dom.appendChild(pathDom) ;	
			
		}


	}

	connectedCallback() {

		super.connectedCallback();
		this.size = this.size || null;
		this.theme = this.theme || null;
		
	}



}

//window.customElements.define("paper-icon",PaperIcon);