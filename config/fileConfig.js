'use strict'
var basePath = 'src/main/';
module.exports = {
  build: {
    path: 'target',
    src: 'target'
  },

  component: {
    src : [ basePath + 'js/**/*.cp.html'],
    srcTemplate:  basePath + 'js/**/*.js'
  },
  developentSource: [
    'src/main/js/**/*'
  ],
  doc: {
    src:  basePath + 'js/**/*.js',
    basePath: basePath + 'js',
    buildPath: 'docs/build/'
  },
}
