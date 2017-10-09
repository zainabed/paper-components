'use strict'
var basePath = 'src/main/';
var distPath = 'dist/';
module.exports = {
  build: {
    path: 'target',
    src: 'target'
  },

  component: {
    src : [ distPath + '*.js'],
    sass :  basePath + 'js/**/*.scss',
    srcTemplate:  distPath + '*.js',
    path: 'main/src/js/component'
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
