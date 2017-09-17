
/**
 * @module element
 * @name BaseElement
 *
 * @description
 * Base class for all custom component.
 * It exteds the HTMLElement to create basic feature of custom element.
 *
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
