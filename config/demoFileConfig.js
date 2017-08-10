var basePath = 'docs/app/';
var targetPath = 'target';

module.exports = {
  script: {
    src: [
      basePath + '**/*.js',
      basePath + '../build/src/**/*.js'
    ],
    lib: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js'
    ],
    dest: targetPath
  },
  css: {
    src: [basePath + '/assets/css/**/*.css'],
    dest: targetPath
  },
  font: {
    src: [basePath + '/assets/css/font/*'],
    dest: targetPath + '/font'
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
    src: [
      basePath + '**/*.tpl.html',
      basePath + '../build/**/*.html',
      basePath + '../build/**/*.html'
    ],
    dest: targetPath
  },
  example: {
    src: [ basePath + '../build/examples/**/*'],
    dest: targetPath + '/examples'
  }
}
