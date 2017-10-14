'use strict';

module.exports = function defaultDeployment() {
  return {
    name: 'default',
    examples: {
      commonFiles: {
        scripts: [
          '../../app_lib.js',
          '../../demo-script.js',
          '../../templates.js',
        ],
        stylesheets: [
          '../../demo-material.css',
        ]
      },
      dependencyPath: '../../'
    },
    scripts: [

    ],
    stylesheets: [

    ]
  };
};
