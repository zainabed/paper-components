var basePath = 'demo/src/';
var targetPath = 'target/';

module.exports = {
  script: {
    src: [basePath + 'js/**/*.js'],
    dest: targetPath
  },
  css: {
    src: [basePath + 'css/**/*.css'],
    dest: targetPath
  },
  index: {
    src: [basePath + 'index.html'],
    resource: [targetPath + '*.js',
      targetPath + '*.css'
    ],
    target: targetPath
  },
  template: {
    src: [ basePath + 'js/**/*.html'],
    dest: targetPath
  }
}
