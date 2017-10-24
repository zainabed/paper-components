import { BaseElement } from '../lib/BaseElement.js';

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
* <paper-button title="add" type="fab" ></paper-button>
* </file>
* </example>
*/


export class PaperButton extends BaseElement {

  constructor() {
    super();
    this.id = 'paper-button';
    this.title = null;
    this.type = null;
    this.disable = null;
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

  set disable(disable) {
    this._disable = disable === 'true' ? true : false;
  }

  get disable() {
    return this._disable;
  }

  set type(type) {
    console.log(type);
    this._type = type || 'raised';
  }

  get type() {
    return this._type;
  }

  static get observedAttributes() {
    return ['title', 'disable', 'type'];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    super.render();
    if (this.dom) {
      // update css class names
      this.updateClass();

      if (this.type === 'fab') {
        this.dom.innerHTML = '<paper-icon name="' + this.title + '"></paper-icon>';
      } else {
        this.dom.innerHTML = this.title;
      }

    }

  }

  updateClass() {
    this.dom.className = 'button ';
    this.dom.className += ' button--type-' + this.type;
    if (this.disable) {
      this.dom.className += ' button--disable';
    }
  }

  onClick() {

  }

}

//window.customElements.define("paper-button",PaperButton);