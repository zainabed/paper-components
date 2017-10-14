var fs = require('fs');
var glob = require('glob');
var fileConfig = require('../config/fileConfig.js');
var path= require('path');
var sass = require('node-sass');
var gulp = require('gulp');

let distPath = 'dist';
gulp.task('sass', function(){
  return buildSass();
})

function buildSass(){
  glob(fileConfig.component.sass, function(error, files) {
    files.forEach(function(file){
      let basePath = path.dirname(file);
      let fileName = path.basename(file, '.scss');
      if(fileName.charAt(0) !== '_'){
        sass.render({
          file: file
        }, function(error, content){

          if(error) {
            console.log(error);
            return;
          }
          if(content.css){
            let cssFile = path.join(distPath, fileName + '/'+ fileName + '.css');

            fs.writeFile(cssFile, content.css , function(error){
              console.log(error);
            })
          }else{
            console.log('Failed to compile scss '+ fileName +' file.');
          }

        });
      }

    })
  });
}
