
 'use strict'
 var currentDocument =  document.currentScript.ownerDocument;

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
 * <paper-button title="Ok"></paper-button>
 * </file>
 * </example>
 */


 class PaperButton extends BaseElement {

   constructor() {
     super();
     this.templateId = 'button';
     this._title = null;
     this._select = null;
     this._type = 'raised';
     this.className = 'button-paper';
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

   set select(callBack) {
     this._select = callBack;
   }

   get select() {
     return this._select;
   }

   set type(type) {
     this._type = type;
   }

   get type() {
     return this._type;
   }

   static get observedAttributes() {
     return ["title", 'select', 'type'];
   }

   connectedCallback() {
     super.connectedCallback();
     this.renderAttribute();
   }

   renderAttribute() {
     var title = this.querySelectorById('title');

     if (title) {
       title.innerHTML = this._title;
     }

     var container = this.querySelectorById('container');
     if (container) {
       container.className = this.getClassName();
     }

   }

   getClassName() {
     return this.className + ' ' + this.className + '-' + this._type;
   }

   attributeChangedCallback(name, oldValue, newValue) {
     this['_' + name] = newValue;
     this.renderAttribute();
   }

   disconnectedCallback() {

   }

   onClick() {
     var title = this.shadow.querySelector('#title');
     if (title) {
       title.innerHTML = this._title + ' is clicked';
     }
     if (typeof window[this._select] === 'function') {
       window[this._select]();
     }
   }

 }

 window.customElements.define('paper-button', PaperButton);
