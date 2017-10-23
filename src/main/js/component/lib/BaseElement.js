import {HTMLElement} from './HTMLElement.js';
/**
 * @module element
 * @name BaseElement
 *
 * @description
 * Base class for all custom component.
 * It exteds the HTMLElement to create basic feature of custom element.
 *
 */
export class BaseElement extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.createShadowRoot();
    this.currentDocument = null;
    this.id = null;
    this.dom = null;
  }

  connectedCallback() {
    this.shadow.innerHTML = this.content;
    this.dom = this.querySelectorById(this.id);
    this.registerEvents();
    this.render();
  }

  disconnectedCallback() {

  }

  attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
      this.render();
  }

  render() {
    
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

  toggleClass(className) {
    if(this.dom != null && className) {
      this.dom.classList.toggle(className);
    }
    
  }

  addClass(className) {
    if(this.dom != null && className != null) {
      this.dom.classList.add(className);
    }
  }

  removeClass(className) {
    if(this.dom != null && className) {
      this.dom.classList.remove(className);
    }
  }
}
