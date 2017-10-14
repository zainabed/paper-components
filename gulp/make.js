var fs = require('fs');
var glob = require('glob');
var fileConfig = require('../config/fileConfig.js');
var path= require('path');
let srcPath = 'src/main/js/component';

function make(){
  glob(fileConfig.component.srcTemplate,  function(error, files){
    console.log(files);
    files.forEach(function(file){
      let basePath = path.dirname(file);
      let   fileName   = path.basename(file, '.js');
      let cssFile = path.join(basePath, fileName + '.css');
      let templateFile = path.join(srcPath, fileName + '.tpl.html');
      let componentFile = path.join(fileConfig.build.path, fileName + '.cp.html');
      console.log(cssFile);
     // console.log(templateFile);
      fs.readFile(file, 'utf8', function(error, scriptContent){
        fs.readFile(cssFile, 'utf8', function(error, cssContent){
          cssContent = '<style>' + cssContent + '</style>';
          fs.readFile(templateFile, 'utf8', function(error, templateContent){
            let content = cssContent + templateContent;
            content =  scriptContent.replace('<%conent%>', content) ;
            content = '<script>' + content + 'window.customElements.define("paper-' + fileName + '", Paper' + fileName.charAt(0).toUpperCase() + fileName.substr(1,fileName.length)+' );</script>';
            
            fs.writeFile(componentFile, content, function(error){
              console.log(error);
            })
          });
        });
      });
    });
  });
}

var gulp = require('gulp');
gulp.task('make', function(){
  return make();
})
