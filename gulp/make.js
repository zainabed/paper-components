var fs = require('fs');
var glob = require('glob');
var fileConfig = require('../config/fileConfig.js');
var path= require('path');

function make(){
  glob(fileConfig.component.srcTemplate,  function(error, files){
    //console.log(files);
    files.forEach(function(file){
      let basePath = path.dirname(file);
      let fileName = path.basename(file, '.js');
      let cssFile = path.join(basePath, fileName + '.css');
      let templateFile = path.join(basePath, fileName + '.tpl.html');
      let componentFile = path.join(fileConfig.build.path, fileName + '.cp.html');
    //  console.log(cssFile);
     // console.log(templateFile);
      fs.readFile(file, 'utf8', function(error, scriptContent){
        fs.readFile(cssFile, 'utf8', function(error, cssContent){
          cssContent = '<style>' + cssContent + '</style>';
          fs.readFile(templateFile, 'utf8', function(error, templateContent){
            let content = cssContent + templateContent;
            content = '<script>' + scriptContent.replace('<%conent%>', content) + '</script>';
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
