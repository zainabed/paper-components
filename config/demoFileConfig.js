var basePath = 'demo/src/';
var targetPath = 'target';

module.exports = {
  script: {
    src: [basePath + 'js/**/*.js'],
    lib: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js'
    ],
    dest: targetPath
  },
  css: {
    src: [basePath + 'css/**/*.css'],
    dest: targetPath
  },
  index: {
    src: [basePath + 'index.html'],
    resource: [
      targetPath + '/*.js',
      targetPath + '/*.css'
    ],
    dest: targetPath
  },
  template: {
    src: [basePath + 'js/**/*.html'],
    dest: targetPath
  }
}
