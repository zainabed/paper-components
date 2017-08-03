# paper-components

HTML Web Components library based on material design

## Install

run following command to install npm repositories.

`npm install`

## Build

To build and run application

`gulp build`

run it on latest version of Chrome and hit http://localhost:8083/ url.

## How to build custom element

All custom element should be create under component folder of project developent source.

Each component should have a folder after its name and that includes

* Component source
* Component template
* Component style

#### example

  +-- component
      +-- button
          +-- button.html        // source
          +-- button.tpl.html    // template
          +-- button.style.html  // style

### button.html
It is a source file of element which imports it's template and style and build
a web component.

### button.tpl.html
It is a template file for component. it contains HTML DOM element.
All content should be encapsulated inside <template> Tag and it's id should be named as
<component name>-tpl-template

example: <template id='button-tpl-template'>

### button.style.html
It is a css style file which decorates the web component.
All content should be encapsulated inside <template> Tag and it's id should be named as
<component name>-style-template

example: <template id='button-style-template'>

All custom elements are inherited from BaseElement therefore it is important to extend it wheneaver
a new custom component is created

Note: BaseElement is located under component/lib folder . you should import it inside your component source file.
