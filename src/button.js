'use strict';
var currentDocument = document.currentScript.ownerDocument;


/**
 * @ngdoc module
 * @name component
 *
 */

/**
 * @ngdoc directive
 * @module component
 * @name button
 * @description
 * A button is wrapper for HTML button usin material design principle.
 *
 * @usage
 * Cards are a convenient means of displaying content composed of different elements. They’re also well-suited for showcasing
 * elements whose size or supported actions vary, like photos with captions of variable length.
 *
 * @example
 * <example name="card">
 * <file name="index.html">
 * <paper-button title="button"></paper-button>
 * <paper-button title="button" type="flat"></paper-button>
 * <paper-button icon="add" type="fab" ></paper-button>
 * </file>
 * </example>
 */
class BaseElement extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.createShadowRoot();
    this.currentDocument = null;
  }

  connectedCallback() {
    this.registerEvents();
  }

  disconnectedCallback() {

  }

  attributeChangedCallback(name, oldValue, newValue) {
      this['_' + name] = newValue;
      this.render();
  }

  render() {
    this.shadow.innerHTML = Mustache.render(this.content, this);
  }

  registerEvents(){
    this.addEventListener('click', this.onClick);
  }

  onClick(){
    console.log('clicked');
  }

  querySelectorById(id){
    return this.shadow.querySelector('#' + id);
  }
}

export class PaperButton extends BaseElement {

	constructor() {
		super();
		this.templateId = 'button';
		this._title = null;
		this._type = 'raised';
		this._icon = null;
		this.currentDocument = currentDocument;
		this.content = `
     <%conent%>
     `;
	}

	get title() {
		return this._title;
	}

	set title(title) {
		this._title = title;

	}

	set icon(icon) {
		this._icon = icon;
	}

	get icon() {
		return this._icon;
	}

	set type(type) {
		this._type = type;
	}

	get type() {
		return this._type;
	}

	static get observedAttributes() {
		return ['title', 'select', 'type', 'icon'];
	}

	connectedCallback() {
		super.connectedCallback();
	}




	onClick() {

	}

}

//window.customElements.define('paper-button', PaperButton);

